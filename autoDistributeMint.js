const RESOURCE_TRANSPORT_ITERATIONS = 500;
const COIN_MINTING_ITERATIONS = 1000;
const NOBLEMAN_COST = [28000, 30000, 25000];
const NOT_SENT_RESOURCES_CAPACITY = 0.3; //to be left for recruitment and building purposes



function sendResourcesAndMintInIntervals() {
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

function fetchOwnVillagesInfo(andThenAction) {
    (function getOwnVillages() {
        socketService.emit(
            routeProvider.GET_CHARACTER_VILLAGES,
            {},
            response => {
                onOwnVillagesFetched(response, andThenAction);
            })
    })();
}

function onOwnVillagesFetched(response, andThenAction) {
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

    console.log("Academy villages " + user.academyVillages.length);
    console.log("Plain villages " + user.plainVillages.length);

    andThenAction();
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
            start_village: startVillage.id,
            target_village: targetVillageId,
            wood: woodAmount,
            clay: clayAmount,
            iron: ironAmount
        },
        response => {
            console.log("VILLAGE " + startVillage.name + " SENT " + woodAmount + " " + clayAmount + " " + ironAmount);
        })
}

//
// { cause: 'Village/getCharacterVillages',
//     code: 'Route/notPublic',
//     details:
//     [ { key: 'route_name', value: 'Village/getCharacterVillages' } ],
//         message: '###Route/notPublic###' }
