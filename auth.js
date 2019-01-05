module.exports = {
    authorize(socketService, routeProvider, rootScope) {
        loginUser(socketService, routeProvider, rootScope)
    }
};

let socketService = null;
let routeProvider = null;
let rootScope = null;
const Store = require('electron-store');
const store = new Store();

function loginUser(socketService, routeProvider, rootScope) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.rootScope = rootScope;

    let userModel = {id: null, worldId: null};

    return new Promise(((resolve, reject) => {
        login()
            .then(loginResponse => {
                userModel.id = loginResponse.player_id;
                userModel.worldId = loginResponse.characters[0].world_id;
                selectCharacter()
            })
            .then(characterResponse => {

            })
    }));
}

function login() {
    return new Promise(((resolve, reject) => {
        socketService.emit(
            routeProvider.LOGIN,
            {
                name: store.get("username"),
                pass: store.get("password")
            },
            response => resolve(response))
    }));
}

function onLoginComplete(loginData) {
    console.log(loginData);


    console.log(user);

    selectCharacter();
}

function selectCharacter() {
    socketService.emit(
        routeProvider.SELECT_CHARACTER,
        {
            id: user.id,
            world_id: user.worldId,
            ref_param: undefined
        },
        response => {
            onCharacterSelected(response);
        })
}

function onCharacterSelected(response) {
    console.log(response);

    runScheduledCommandsInLoop();
}