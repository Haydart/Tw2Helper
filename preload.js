console.log("Bot start");

const setTools = require("electron").remote.getGlobal("setTools");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        setTools(injector.get("socketService"), injector.get("routeProvider"));
    }, 2000);
});
