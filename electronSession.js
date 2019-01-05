const botHandle = require("./mainBot");
const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            devTools: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    window.loadURL("https://pl.tribalwars2.com/");

    window.webContents.openDevTools();

    window.webContents.on("will-navigate", (event, _) => {
        event.preventDefault();
    });

    window.webContents.on("did-finish-load", () => {
        console.log("Finished loading");
        window.webContents.executeJavaScript(`
            let rootScope = angular.element(document).scope();           
            console.log(rootScope);
        `);
    });
}

app.on("ready", createWindow);

global.startBot = botHandle.run;