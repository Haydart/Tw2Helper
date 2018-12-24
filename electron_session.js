const {app, BrowserWindow} = require("electron");
const path = require("path");
const distributeAndMint = require("./auto_distribute_mint");

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

    window.once("did-finish-load", () => {
        console.log("Finished loading");
    });
}

app.on("ready", createWindow);

global.startBot = distributeAndMint.run;