RESOURCE_TRANSPORT_ITERATIONS = 500;
COIN_MINTING_ITERATIONS = 1000;
NOBLEMAN_COST = [28000, 30000, 25000];

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
    for (i = 0; i < COIN_MINTING_ITERATIONS; i++) {
        setTimeout(() => {
            fetchOwnVillagesInfo(mintCoins);

        }, 1000 * 60 * 6 * i)
    }

    for (i = 0; i < RESOURCE_TRANSPORT_ITERATIONS; i++) {
        setTimeout(() => {
            sendResourcesIfViable()
        }, 1000 * 60 * 15 * i)
    }
}

function fetchOwnVillagesInfo(func) {
    (function getOwnVillages() {
        socketService.emit(
            routeProvider.GET_CHARACTER_VILLAGES,
            {},
            response => {
                onOwnVillagesFetched(response, func);
            })
    })();
}

function onOwnVillagesFetched(response, func) {
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

    func();
}

function mintCoins() {
    user.academyVillages.forEach((academyVillage) => {
        let mintAmount = Math.min(
            Math.floor(academyVillage.res_wood / NOBLEMAN_COST[0]),
            Math.floor(academyVillage.res_clay / NOBLEMAN_COST[1]),
            Math.floor(academyVillage.res_iron / NOBLEMAN_COST[2])
        );

        if (mintAmount > 0) {
            socketService.emit(
                routeProvider.MINT_COINS,
                {
                    village_id: academyVillage.id,
                    amount: mintAmount
                },
                response => {
                    console.log("MINTING RESPONSE");
                    console.log(response)
                })
        }
    })
}

function sendResourcesIfViable() {
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
            onAvailableMerchantsCountFetched(village, response.free)
        })
}

function onAvailableMerchantsCountFetched(village, availableMerchantsCount) {
    if (availableMerchantsCount > 0) {
        sendResourcesToClosestAcademyVillage(village, availableMerchantsCount)
    }
}

function sendResourcesToClosestAcademyVillage(village, availableMerchantsCount) {
    let minDistanceToAcademyVillage = 1000;
    let closestAcademyVillageId = undefined;

    user.academyVillages.forEach((academyVillage) => {
        let distanceFromCurrentAcademyVillage = Math.sqrt(
            Math.pow(village.x - academyVillage.x, 2) + Math.pow(village.y - academyVillage.y, 2)
        );
        if (distanceFromCurrentAcademyVillage < minDistanceToAcademyVillage) {
            minDistanceToAcademyVillage = distanceFromCurrentAcademyVillage;
            closestAcademyVillageId = academyVillage.id;
        }
    });

    let transportCapacity = availableMerchantsCount * 1000;
    let woodAmount = Math.min(village.res_wood, Math.floor(transportCapacity / 3));
    let clayAmount = Math.min(village.res_clay, Math.floor(transportCapacity / 3));
    let ironAmount = Math.min(village.res_iron, Math.floor(transportCapacity / 3));

    sendResources(village.id, closestAcademyVillageId, woodAmount, clayAmount, ironAmount)
}


function sendResources(startVillageId, targetVillageId, woodAmount, clayAmount, ironAmount) {
    socketService.emit(
        routeProvider.TRADING_SEND_RESOURCES,
        {
            start_village: startVillageId,
            target_village: targetVillageId,
            wood: woodAmount,
            clay: clayAmount,
            iron: ironAmount
        },
        response => {
            console.log(response)
        })
}

