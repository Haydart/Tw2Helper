module.exports = {
    recruitSpies: (_socketService, _routeProvider, _allVillages) => recruitSpies(_socketService, _routeProvider, _allVillages)
};

TARGET_SPIES_AMOUNT = 4;
MAX_POSSIBLE_SPIES_AMOUNT = 5;

let socketService;
let routeProvider;
let villages;

function recruitSpies(socketService, routeProvider, villages) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.villages = villages;

    let spyRecruitmentPromises = [];

    villages.forEach(village => {
        console.log(village);
        spyRecruitmentPromises.push(new Promise(resolve => {
            fetchVillageSpyInfo(village.id)
                .then(spiesInfoResponse => {
                    let slotsToRecruit = createRecruitmentList(spiesInfoResponse, village.building_levels.tavern);
                    if (slotsToRecruit.length > 0) {
                        console.log("RECRUITING SPIES FOR " + village.name + ", ON SLOTS " + slotsToRecruit);
                        return recruitSpiesForVillage(village.id, slotsToRecruit)
                    } else {
                        console.log("COULD NOT RECRUIT SPIES FOR " + village.name);
                        return Promise.resolve()
                    }
                })
                .then(spiesRecruitmentResponse => {
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
            response => resolve(response)
        )
    })
}

function createRecruitmentList(villageSpiesResponse, villageTavernLevel) {
    let maxPossibleSpiesForCurrentVillage;

    if (villageTavernLevel === 0) {
        maxPossibleSpiesForCurrentVillage = 0
    } else {
        maxPossibleSpiesForCurrentVillage = clamp(Math.floor(villageTavernLevel / 3 + 1), 0, 5)
    }

    let recruitmentSlots = [];
    if (villageSpiesResponse.spy_1 === 0 && maxPossibleSpiesForCurrentVillage >= 1) recruitmentSlots.push(1);
    if (villageSpiesResponse.spy_2 === 0 && maxPossibleSpiesForCurrentVillage >= 2) recruitmentSlots.push(2);
    if (villageSpiesResponse.spy_3 === 0 && maxPossibleSpiesForCurrentVillage >= 3) recruitmentSlots.push(3);
    if (villageSpiesResponse.spy_4 === 0 && maxPossibleSpiesForCurrentVillage >= 4) recruitmentSlots.push(4);
    if (TARGET_SPIES_AMOUNT === MAX_POSSIBLE_SPIES_AMOUNT
        && villageSpiesResponse.spy_5 === 0 && maxPossibleSpiesForCurrentVillage === 5) recruitmentSlots.push(5);
    return recruitmentSlots
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

function recruitSpiesForVillage(villageId, slotsToRecruit) {
    let singleVillageRecruitmentPromises = [];

    slotsToRecruit.forEach(slotNumber => {
        singleVillageRecruitmentPromises.push(new Promise(resolve => {
            this.socketService.emit(
                this.routeProvider.SCOUTING_RECRUIT,
                {
                    village_id: villageId,
                    slot: slotNumber
                },
                response => resolve(response)
            )
        }))
    });
    return new Promise(resolve => Promise
        .all(singleVillageRecruitmentPromises)
        .then(resolve)
    );
}
