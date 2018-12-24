USERNAME = process.env.TW2_USERNAME;
PASSWORD = process.env.TW2_PASSWORD;

let socketService = null;
let routeProvider = null;

global.setTools = function setTools(_socketService, _routeProvider) {
    socketService = _socketService;
    routeProvider = _routeProvider;

    let user;

    login()
};

function login() {
