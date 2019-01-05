module.exports = {
    run(socketService, routeProvider, rootScope) {
        setupBot(socketService, routeProvider, rootScope)
    }
};

const auth = require("./auth");

let socketService = null;
let routeProvider = null;
let rootScope = null;

let user = {id: null, worldId: null, plainVillages: [], academyVillages: []};

function setupBot(_socketService, _routeProvider, _rootScope) {
    socketService = _socketService;
    routeProvider = _routeProvider;
    rootScope = _rootScope;

    auth.authorize(socketService, routeProvider, rootScope)
        .then(authResponse => console.log(authResponse))
}