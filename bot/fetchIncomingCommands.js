module.exports = {
    run: (socketService, routeProvider, allVillages) => notifyAttack(socketService, routeProvider, allVillages)
};

let socketService;
let routeProvider;
let allVillages;

function notifyAttack(socketService, routeProvider, allVillages) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;
    this.allVillages = allVillages;

    let villagesIds = allVillages.map(village => village.id);
    console.log(villagesIds);

    // fetchIncomingCommands();

    return new Promise(resolve => {
        resolve()
    });
}
