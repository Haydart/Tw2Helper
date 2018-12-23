const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
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
    });
}