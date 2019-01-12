module.exports = {
    run(_socketService, _routeProvider, _eventTypeProvider, _rootScope) {
        setupBot(_socketService, _routeProvider, _eventTypeProvider, _rootScope)
    }
};

const auth = require("./auth");
const fetchBasicVillagesData = require("./fetchVillagesInfo");
const distributeResources = require("./distributeResources");
const mintCoins = require("./mintCoins");
const recruitSpies = require("./recruitSpies");

let user;
let villages;

function setupBot(socketService, routeProvider, eventTypeProvider, rootScope) {

    auth.authorize(socketService, routeProvider, rootScope)
        .then(authResponse => {
            user = authResponse;
            return fetchBasicVillagesData.run(socketService, routeProvider)
        })
        .then(villagesData => {
            villages = villagesData;
            mintCoins.run(socketService, routeProvider, villages.academyVillages)
        })
        .then(ignored => {
            distributeResources.run(socketService, routeProvider, villages.plainVillages, villages.academyVillages)
        })
        .then(ignored => {
            recruitSpies.run(socketService, routeProvider, villages.allVillages)
        })
}

function otherOperations(rootScope, eventTypeProvider) {
    const originalConsoleLog = console.log.bind(console);
    console.log = (...args) => {
        // writeArgsToFile(args);
        originalConsoleLog(...args);
    };

    rootScope.$on('', function listener(event, command) {
        console.log(command)
    });
}
