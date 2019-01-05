module.exports = {
    authorize: (_socketService, _routeProvider, _rootScope) => loginUser(_socketService, _routeProvider, _rootScope)
};

let socketService = null;
let routeProvider = null;
let rootScope = null;
const Store = require('electron-store');
const store = new Store();
let userModel = {id: null, worldId: null, loggedIn: false};

function loginUser(socketService, routeProvider, rootScope) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.rootScope = rootScope;

    return new Promise(((resolve, reject) => {
        login()
            .then(loginResponse => {
                userModel.id = loginResponse.player_id;
                userModel.worldId = loginResponse.characters[0].world_id;
                selectCharacter()
            })
            .then(selectCharacterResponse => {
                userModel.loggedIn = true;
                resolve(userModel)
            })
    }));
}

function login() {
    return new Promise(((resolve, reject) => {
        this.socketService.emit(
            this.routeProvider.LOGIN,
            {
                name: store.get("username"),
                pass: store.get("password")
            },
            response => resolve(response))
    }));
}

function selectCharacter() {
    return new Promise(((resolve, reject) => {
        this.socketService.emit(
            this.routeProvider.SELECT_CHARACTER,
            {
                id: userModel.id,
                world_id: userModel.worldId,
                ref_param: undefined
            },
            response => resolve(response))
    }));
}