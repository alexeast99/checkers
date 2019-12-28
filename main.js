const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadFile('view/index.html');
}

app.on('ready', createWindow);
