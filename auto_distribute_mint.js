USERNAME = process.env.TW2_USERNAME;
PASSWORD = process.env.TW2_PASSWORD;

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
    console.log(USERNAME);

    socketService.emit(
        routeProvider.LOGIN,
        {
            name: USERNAME,
            pass: PASSWORD
        },
        response => {
            onLoginComplete(response);
        })
}

function onLoginComplete(loginData) {
    console.log(loginData)
}