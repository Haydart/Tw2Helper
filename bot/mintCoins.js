module.exports = {
    mintCoins: (_socketService, _routeProvider, _academyVillages) => mintCoins(_socketService, _routeProvider, _academyVillages)
};

const NOBLEMAN_COST = [28000, 30000, 25000];

let socketService = null;
let routeProvider = null;
let academyVillages = null;

function mintCoins(socketService, routeProvider, academyVillages) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.academyVillages = academyVillages;

    let mintingPromises = [];

    academyVillages.forEach((academyVillage) => {
        mintingPromises.push(new Promise((resolve, _) => {

            let mintAmount = Math.min(
                Math.floor(academyVillage.res_wood / NOBLEMAN_COST[0]),
                Math.floor(academyVillage.res_clay / NOBLEMAN_COST[1]),
                Math.floor(academyVillage.res_iron / NOBLEMAN_COST[2])
            );

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
    });

    return new Promise(resolve => {
        Promise.all(mintingPromises)
            .then(mintingResponses => resolve(mintingResponses))
    })
}