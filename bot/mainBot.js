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
const fetchIncomingCommands = require("./fetchIncomingCommands");

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
            fetchIncomingCommands.run(socketService, routeProvider, villages.allVillages)
        })
        .then(ignored => {
            distributeResources.run(socketService, routeProvider, villages.plainVillages, villages.academyVillages)
        })
        .then(ignored => {
            recruitSpies.run(socketService, routeProvider, villages.allVillages)
        })
}