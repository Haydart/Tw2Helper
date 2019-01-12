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

    return new Promise(resolve => {
        fetchIncomingCommands(villagesIds)
            .then(incomingCommandsResponse => {
                resolve()
            })
    });
}

function fetchIncomingCommands(villagesIds) {
    return new Promise(resolve => {
        this.socketService.emit(
            this.routeProvider.OVERVIEW_GET_INCOMING,
            {
                count: 10,
                offset: 0,
                sorting: "false",
                reverse: false,
                groups: [],
                command_types: ['attack'],
                villages: villagesIds
            },
            response => {
                resolve(response);
                console.log(response)
            }
        )
    })
}