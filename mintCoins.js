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