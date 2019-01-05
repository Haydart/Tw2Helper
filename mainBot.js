module.exports = {
    run(socketService, routeProvider, rootScope) {
        setupBot(socketService, routeProvider, rootScope)
    }
};

let socketService = null;
let routeProvider = null;
let rootScope = null;

let user = {id: null, worldId: null, plainVillages: [], academyVillages: []};

function setupBot(_socketService, _routeProvider, _rootScope) {
    socketService = _socketService;
    routeProvider = _routeProvider;
    rootScope = _rootScope;
    authorize()
}


function runScheduledCommandsInLoop() {

}
