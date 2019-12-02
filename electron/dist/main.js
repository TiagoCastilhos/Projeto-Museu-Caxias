"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
const dbConnection_1 = require("./data/dbConnection");
const electron_2 = require("electron");
let win;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
electron_2.ipcMain.on('select-query', (event, args) => {
    const conn = new dbConnection_1.default().getConnection();
    conn.connect((error) => console.log(error));
    conn.query(args[0], (error, rows, field) => {
        if (error)
            console.log(error);
        else
            event.sender.send('query-result', rows);
    });
    conn.end();
});
function createWindow() {
    win = new electron_1.BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
        protocol: 'file:',
        slashes: true,
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}
//# sourceMappingURL=main.js.map