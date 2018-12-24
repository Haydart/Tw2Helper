const Store = require('electron-store');
const store = new Store();

module.exports = {
    run(socketService, routeProvider) {
        setupBot(socketService, routeProvider)
    }
};

let socketService = null;
let routeProvider = null;

function setupBot(_socketService, _routeProvider) {
    socketService = _socketService;
    routeProvider = _routeProvider;

    login()
}

function login() {
    console.log(store.get("username"));
    console.log(store.get("password"));

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
    console.log(loginData)
}