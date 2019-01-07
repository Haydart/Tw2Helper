module.exports = {
    authorize: (_socketService, _routeProvider) => loginUser(_socketService, _routeProvider)
};

let socketService = null;
let routeProvider = null;
const Store = require('electron-store');
const store = new Store();
let userModel = {id: null, worldId: null, loggedIn: false};

function loginUser(socketService, routeProvider, rootScope) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;

    return new Promise(((resolve, _) => {
        login()
            .then(loginResponse => {
                userModel.id = loginResponse.player_id;
                userModel.worldId = loginResponse.characters[0].world_id;
                return selectCharacter()
            })
            .then(selectCharacterResponse => {
                console.log(selectCharacterResponse);
                userModel.loggedIn = true;
                resolve(userModel)
            })
    }));
}

function login() {
    return new Promise(((resolve, _) => {
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
    return new Promise((resolve, _) => {
        this.socketService.emit(
            this.routeProvider.SELECT_CHARACTER,
            {
                id: userModel.id,
                world_id: userModel.worldId,
                ref_param: undefined
            },
            response => {
                console.log("Character selected", Date.now());
                console.log(response);
                resolve(response)
            })
    });
}