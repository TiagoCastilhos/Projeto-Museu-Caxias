import { app, BrowserWindow, IpcMainEvent } from 'electron'
import * as path from 'path'
import * as url from 'url'
import DbConnection from './data/dbConnection'
import { ipcMain } from 'electron';

let win: BrowserWindow

app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

ipcMain.on('select-query', (event: IpcMainEvent, args: any[]) => {
    const conn = new DbConnection().getConnection();
    conn.connect((error) => { 
        if (error)
            console.log(error)
    });

    conn.query(args[0], (error, rows, field) => {
        if (error)
            console.log(error);
        else
            event.sender.send('query-result', rows);
    })
    conn.end();
});

function createWindow() {
    win = new BrowserWindow(
        { 
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true,
                webSecurity: false
            }
        })

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/museu-caxias/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    )

    win.maximize();
    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}