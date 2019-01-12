module.exports = {
    run: (_socketService, _routeProvider, _academyVillages) => mintCoins(_socketService, _routeProvider, _academyVillages)
};

const NOBLEMAN_COST = [28000, 30000, 25000];
const ACADEMY_VILLAGE_RESOURCES_RESERVE = 75000;

let socketService = null;
let routeProvider = null;
let academyVillages = null;

function mintCoins(socketService, routeProvider, academyVillages) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.academyVillages = academyVillages;

    let mintingPromises = [];

    academyVillages.forEach((academyVillage) => {
        let mintAmount = Math.min(
            Math.floor(Math.max(0, academyVillage.res_wood - ACADEMY_VILLAGE_RESOURCES_RESERVE) / NOBLEMAN_COST[0]),
            Math.floor(Math.max(0, academyVillage.res_clay - ACADEMY_VILLAGE_RESOURCES_RESERVE) / NOBLEMAN_COST[1]),
            Math.floor(Math.max(0, academyVillage.res_iron - ACADEMY_VILLAGE_RESOURCES_RESERVE) / NOBLEMAN_COST[2])
        );

        if (mintAmount) {
            mintingPromises.push(new Promise((resolve, _) => {

                socketService.emit(
                    routeProvider.MINT_COINS,
                    {
                        village_id: academyVillage.id,
                        amount: mintAmount
                    },
                    response => {
                        console.log(response);
                        resolve(response)
                    })
            }));
        }
    });

    return new Promise(resolve => {
        Promise.all(mintingPromises)
            .then(mintingResponses => resolve(mintingResponses))
    })
}