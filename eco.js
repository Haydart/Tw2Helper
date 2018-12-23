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
}