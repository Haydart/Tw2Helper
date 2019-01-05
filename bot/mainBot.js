module.exports = {
    run(socketService, routeProvider, rootScope) {
        setupBot(socketService, routeProvider, rootScope)
    }
};

const auth = require("./auth");

let socketService = null;
let routeProvider = null;
let rootScope = null;

let user;

function setupBot(_socketService, _routeProvider, _rootScope) {
    socketService = _socketService;
    routeProvider = _routeProvider;
    rootScope = _rootScope;

    auth.authorize(socketService, routeProvider, rootScope)
        .then(authResponse => {
            user = authResponse;
            console.log(user);
        })
}