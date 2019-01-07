module.exports = {
    run(socketService, routeProvider, rootScope) {
        setupBot(socketService, routeProvider, rootScope)
    }
};

const auth = require("./auth");
const villageData = require("./fetchVillagesInfo");
const resources = require("./distributeResources");
const coins = require("./mintCoins");

let user;
let villages;

function setupBot(_socketService, _routeProvider, _rootScope) {

    auth.authorize(_socketService, _routeProvider, _rootScope)
        .then(authResponse => {
            user = authResponse;
            return villageData.fetchOwnVillagesData(_socketService, _routeProvider)
        })
        .then(villagesData => {
            villages = villagesData;
            coins.mintCoins(_socketService, _routeProvider, villages.academyVillages)
        })
        .then()
}