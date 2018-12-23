const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            devTools: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadURL("https://pl.tribalwars2.com/");

    win.webContents.openDevTools();

    win.webContents.on("will-navigate", (event, _) => {
        event.preventDefault();
    });

    win.once("did-finish-load", () => {
    });
}