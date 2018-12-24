const Store = require('electron-store');
const store = new Store();

module.exports = {
    run(socketService, routeProvider) {
        setupBot(socketService, routeProvider)
    }
};

let socketService = null;
let routeProvider = null;
let user = {id: undefined, worldId: undefined};

function setupBot(_socketService, _routeProvider) {
    socketService = _socketService;
    routeProvider = _routeProvider;

    login()
}

function login() {
    socketService.emit(
        routeProvider.LOGIN,
        {
            name: store.get("username"),
            pass: store.get("password")
        },
        response => {
            onLoginComplete(response);
        })
}

function onLoginComplete(loginData) {
    console.log(loginData);

    user.id = loginData.player_id;
    user.worldId = loginData.characters[0].world_id;
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

    socketService.emit(
        routeProvider.GROUPS_GET_VILLAGES,
        {},
        response => {
            console.log(response)
        })
}
