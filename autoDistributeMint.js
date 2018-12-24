ITERATIONS = 10000;

const Store = require('electron-store');
const store = new Store();

module.exports = {
    run(socketService, routeProvider) {
        setupBot(socketService, routeProvider)
    }
};

let socketService = null;
let routeProvider = null;
let user = {id: undefined, worldId: undefined, plainVillages: [], academyVillages: []};

function setupBot(_socketService, _routeProvider) {
    socketService = _socketService;
    routeProvider = _routeProvider;

    login()
}

function login() {
    socketService.emit(
        routeProvider.LOGIN,
        {
            name: store.get("username"),
            pass: store.get("password")
        },
        response => {
            onLoginComplete(response);
        })
}

function onLoginComplete(loginData) {
    console.log(loginData);

    user.id = loginData.player_id;
    user.worldId = loginData.characters[0].world_id;
    console.log(user);

    selectCharacter();
}

function selectCharacter() {
    socketService.emit(
        routeProvider.SELECT_CHARACTER,
        {
            id: user.id,
            world_id: user.worldId,
            ref_param: undefined
        },
        response => {
            onCharacterSelected(response);
        })
}

function onCharacterSelected(response) {
    console.log(response);

    distributeAndMintInIntervals();
}

function distributeAndMintInIntervals() {
    for (i = 0; i < ITERATIONS; i++) {
        setTimeout(() => {
            startDistributeAndMintProcedure()
        }, 1000 * 5 * i)
    }
}

function startDistributeAndMintProcedure() {
    (function getOwnVillages() {
        socketService.emit(
            routeProvider.GET_CHARACTER_VILLAGES,
            {},
            response => {
                onOwnVillagesFetched(response);
            })
    })();
}

function onOwnVillagesFetched(response) {
    console.log(response);

    response.villages.forEach((village) => {
        if (village.academy) {
            user.academyVillages.push(village)
        } else {
            user.plainVillages.push(village)
        }
    });

    console.log("academy villages" + user.academyVillages);
    console.log("plain villages" + user.plainVillages);

    sendRawMaterialsIfViable()
}

function sendRawMaterialsIfViable() {
    user.plainVillages.forEach((village) => {
        fetchAvailableMerchantsCount(village)
    })
}

function fetchAvailableMerchantsCount(village) {
    socketService.emit(
        routeProvider.TRADING_GET_MERCHANT_STATUS,
        {
            village_id: village.id,
        },
        response => {
            onAvailableMerchantsCountFetched(village, response)
        })
}

function onAvailableMerchantsCountFetched(village, response) {

}
