module.exports = {
    sendResources: (_socketService, _routeProvider, _plainVillages, _academyVillages) =>
        sendResourcesIfViable(_socketService, _routeProvider, _plainVillages, _academyVillages)
};

let socketService = null;
let routeProvider = null;
let plainVillages = null;
let academyVillages = null;

const NOT_SENT_RESOURCES_CAPACITY = 0.6;

function sendResourcesIfViable(socketService, routeProvider, plainVillages, academyVillages) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.plainVillages = plainVillages;
    this.academyVillages = academyVillages;

    let resourcePromises = [];

    plainVillages.forEach(plainVillage => {
        resourcePromises.push(new Promise(resolve => {
            fetchAvailableMerchantsCount(plainVillage)
                .then(availableMerchantsCount => {
                    if (availableMerchantsCount > 0) {
                        return sendResourcesToClosestAcademyVillage(plainVillage, availableMerchantsCount)
                    } else {
                        console.log("VILLAGE " + plainVillage.name + ' HAS NO AVAILABLE MERCHANTS');
                        return Promise.resolve()
                    }
                })
                .then(resourceSendingResponse => {
                    resolve(resourceSendingResponse)
                })
        }));
    });

    return new Promise((resolve, reject) => {
        Promise.all(resourcePromises)
            .then(response => resolve(response))
    })
}

function fetchAvailableMerchantsCount(village) {
    return new Promise((resolve, reject) => {
        this.socketService.emit(
            this.routeProvider.TRADING_GET_MERCHANT_STATUS,
            {
                village_id: village.id,
            },
            response => {
                resolve(response.free)
            })
    });
}

function sendResourcesToClosestAcademyVillage(village, availableMerchantsCount) {
    return new Promise((resolve, reject) => {
        let minDistanceToAcademyVillage = Number.MAX_SAFE_INTEGER;
        let closestAcademyVillageId = null;

        this.academyVillages.forEach(academyVillage => {
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
            performSendResources(village, closestAcademyVillageId, woodAmount, clayAmount, ironAmount)
                .then(response => {
                    resolve(response)
                })
        } else {
            console.log("VILLAGE " + village.name + " HAS NO SPARE RESOURCES");
            resolve()
        }
    });
}

function performSendResources(startVillage, targetVillageId, woodAmount, clayAmount, ironAmount) {
    return new Promise(resolve => {
        this.socketService.emit(
            this.routeProvider.TRADING_SEND_RESOURCES,
            {
                start_village: startVillage.id,
                target_village: targetVillageId,
                wood: woodAmount,
                clay: clayAmount,
                iron: ironAmount
            },
            response => {
                console.log("VILLAGE " + startVillage.name + " SENT " + woodAmount + " " + clayAmount + " " + ironAmount);
                resolve(response)
            })
    });
}

//
// { cause: 'Village/getCharacterVillages',
//     code: 'Route/notPublic',
//     details:
//     [ { key: 'route_name', value: 'Village/getCharacterVillages' } ],
//         message: '###Route/notPublic###' }