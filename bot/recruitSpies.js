module.exports = {
    recruitSpies: (_socketService, _routeProvider, _allVillages) => recruitSpies(_socketService, _routeProvider, _allVillages)
};

TARGET_SPIES_AMOUNT = 4;

let socketService;
let routeProvider;
let villages;

function recruitSpies(socketService, routeProvider, villages) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.villages = villages;

    let spyRecruitmentPromises = [];

    villages.forEach(village => {
        spyRecruitmentPromises.push(new Promise(resolve => {
            fetchVillageSpyInfo(village.id)
                .then(spiesInfoResponse => {
                    let slotsToRecruit = createRecruitmentList(spiesInfoResponse);
                    console.log("recruiting spies for " + village.name + ", on slots " + slotsToRecruit);
                    return recruitSpiesForVillage(village.id, slotsToRecruit)
                })
                .then(spiesRecruitmentResponse => {
                    console.log(spiesRecruitmentResponse);
                    resolve(spiesRecruitmentResponse)
                })
        }));
    });

    return new Promise((resolve, reject) => {
        Promise.all(spyRecruitmentPromises)
            .then(response => resolve(response))
    })
}

function fetchVillageSpyInfo(villageId) {
    return new Promise(resolve => {
        this.socketService.emit(
            this.routeProvider.SCOUTING_GET_INFO,
            {
                village_id: villageId,
            },
            response => {
                console.log(response);
                resolve(response)
            })
    })
}

function createRecruitmentList(villageSpiesResponse) {
    let recruitmentSlots = [];
    if (villageSpiesResponse.spy_1 === 0) recruitmentSlots.push(1);
    if (villageSpiesResponse.spy_2 === 0) recruitmentSlots.push(2);
    if (villageSpiesResponse.spy_3 === 0) recruitmentSlots.push(3);
    if (villageSpiesResponse.spy_4 === 0) recruitmentSlots.push(4);
    if (TARGET_SPIES_AMOUNT === 5 && villageSpiesResponse.spy_5 === 0) recruitmentSlots.push(5);
    return recruitmentSlots
}

function recruitSpiesForVillage(villageId, slotsToRecruit) {
    let singleVillageRecruitmentPromises = [];

    slotsToRecruit.forEach(slotNumber => {
        console.log(slotNumber);
        singleVillageRecruitmentPromises.push(new Promise(resolve => {
            this.socketService.emit(
                this.routeProvider.SCOUTING_RECRUIT,
                {
                    village_id: villageId,
                    slot: slotNumber
                },
                response => {
                    console.log(response);
                    resolve(response)
                })
        }))
    });
    return new Promise(resolve => Promise
        .all(singleVillageRecruitmentPromises)
        .then(resolve)
    );

}
