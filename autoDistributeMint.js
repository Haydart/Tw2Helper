RESOURCE_TRANSPORT_ITERATIONS = 500;
COIN_MINTING_ITERATIONS = 1000;
NOBLEMAN_COST = [28000, 30000, 25000];
NOT_SENT_RESOURCES_CAPACITY = 0.5; //to be left for recruitment and building purposes

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
        }, 1000 * 60 * 15 * i + 5000)
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
    user.academyVillages = [];
    user.plainVillages = [];

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
    } else {
        console.log("VILLAGE " + village.name + " HAS NO AVAILABLE MERCHANTS")
    }
}

function sendResourcesToClosestAcademyVillage(village, availableMerchantsCount) {
    let minDistanceToAcademyVillage = Number.MAX_SAFE_INTEGER;
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
    let villageMaxStorage = village.res_max_storage;

    let woodAmount = Math.floor(Math.min(
        Math.max(village.res_wood - villageMaxStorage * NOT_SENT_RESOURCES_CAPACITY, 0),
        Math.floor(transportCapacity / 3)
    ));
    let clayAmount = Math.floor(Math.min(
        Math.max(village.res_clay - villageMaxStorage * NOT_SENT_RESOURCES_CAPACITY, 0),
        Math.floor(transportCapacity / 3)
    ));
    let ironAmount = Math.floor(Math.min(
        Math.max(village.res_iron - villageMaxStorage * NOT_SENT_RESOURCES_CAPACITY, 0),
        Math.floor(transportCapacity / 3)
    ));

    if (woodAmount > 0 || clayAmount > 0 || ironAmount > 0) {
        sendResources(village, closestAcademyVillageId, woodAmount, clayAmount, ironAmount)
    } else {
        console.log("VILLAGE " + village.name + " HAS NO SPARE RESOURCES")
    }
}

function sendResources(startVillage, targetVillageId, woodAmount, clayAmount, ironAmount) {
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
            console.log("VILLAGE " + startVillage.name + " SENT " + woodAmount + " " + clayAmount + " " + ironAmount);
        })
}