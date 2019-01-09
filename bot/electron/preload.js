console.log("Bot start");

const startBot = require("electron").remote.getGlobal("startBot");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        startBot(
            injector.get("socketService"),
            injector.get("routeProvider"),
            injector.get('eventTypeProvider'),
            angular.element(document).scope()
        );
    }, 3000);
});
