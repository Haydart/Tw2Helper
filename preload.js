console.log("Bot start");

const setTools = require("electron").remote.getGlobal("setTools");
const getDoShit = require("electron").remote.getGlobal("getDoShit");

if (getDoShit()) {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            setTools(injector.get("socketService"), injector.get("routeProvider"));
        }, 2000);
    });
}
