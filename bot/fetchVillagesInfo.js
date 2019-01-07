module.exports = {
    fetchOwnVillagesData: (_socketService, _routeProvider) => fetchAndOrderOwnVillagesData(_socketService, _routeProvider)
};

let socketService = null;
let routeProvider = null;

function fetchAndOrderOwnVillagesData(socketService, routeProvider) {
    this.socketService = socketService;
    this.routeProvider = routeProvider;

    return new Promise((resolve, _) => {
        fetchVillagesData()
            .then(villagesResponse => {
                let processedData = processVillagesData(villagesResponse);
                resolve(processedData)
            });
    })
}

function fetchVillagesData() {
    return new Promise((resolve, _) => {
        this.socketService.emit(
            this.routeProvider.GET_CHARACTER_VILLAGES,
            {},
            response => {
                resolve(response);
                console.log("village details fetched", Date.now())
            }
        )
    });
}

function processVillagesData(response) {
    let villagesModel = {plainVillages: [], academyVillages: [], preceptoryOrderVillages: []};

    response.villages.forEach(village => {
        let preceptoryOrAcademy = false;

        if (village.academy) {
            villagesModel.academyVillages.push(village);
            preceptoryOrAcademy = true
        }
        if (village.preceptory_level > 0) {
            villagesModel.preceptoryOrderVillages.push(village);
            preceptoryOrAcademy = true
        }

        if (!preceptoryOrAcademy) {
            villagesModel.plainVillages.push(village)
        }
    });

    console.log("Academy villages " + villagesModel.academyVillages.length);
    console.log("Preceptory order villages " + villagesModel.preceptoryOrderVillages.length);
    console.log("Plain villages " + villagesModel.plainVillages.length);

    return villagesModel
}