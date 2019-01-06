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

function setupBot(_socketService, _routeProvider, _rootScope) {

    auth.authorize(_socketService, _routeProvider, _rootScope)
        .then(authResponse => {
            user = authResponse;
            console.log(user);
            return villageData.fetchOwnVillagesData(_socketService, _routeProvider)
        })
        .then(villagesData => {
            console.log(villagesData)
        })
}