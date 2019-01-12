module.exports = {
    run(_socketService, _routeProvider, _eventTypeProvider, _rootScope) {
        setupBot(_socketService, _routeProvider, _eventTypeProvider, _rootScope)
    }
};

const auth = require("./auth");
const villageData = require("./fetchVillagesInfo");
const resources = require("./distributeResources");
const coins = require("./mintCoins");
const recruitSpies = require("./recruitSpies");

let user;
let villages;

function setupBot(socketService, routeProvider, eventTypeProvider, rootScope) {

    auth.authorize(socketService, routeProvider, rootScope)
        .then(authResponse => {
            user = authResponse;
            return villageData.fetchOwnVillagesData(socketService, routeProvider)
        })
        .then(villagesData => {
            villages = villagesData;
            coins.mintCoins(socketService, routeProvider, villages.academyVillages)
        })
        .then(ignored => {
            resources.sendResources(socketService, routeProvider, villages.plainVillages, villages.academyVillages)
        })
        .then(ignored => {
            recruitSpies.recruitSpies(socketService, routeProvider, villages.allVillages)
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
