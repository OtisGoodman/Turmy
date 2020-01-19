const {app, BrowserWindow} = require('electron');
let mainWindow;
let docsWindow;
const path = require('path');
const ipc = require('electron').ipcMain
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 500,
  toolbar: null,
  frame: false,
  title: 'Turmy',
  transparent: true,
  webPreferences: {
    nodeIntegration: true,
    devTools: true
  }
});
mainWindow.setResizable(false);
mainWindow.loadURL('file://' + __dirname + '/main.html');
mainWindow.setIcon(path.join(__dirname, '/assets/icon.png'));
});
ipc.on('closeMain',function(event){
    app.quit()
     })
ipc.on('swapDocs',function(event){

docsWindow = new BrowserWindow({
  width: 350,
  height: 700,
toolbar: null,
frame: false,
title: 'Turmy - Docs',
transparent: true,
webPreferences: {
  nodeIntegration: true,
  devTools: true
}
});
mainWindow.close();
docsWindow.setResizable(false);
docsWindow.loadURL('file://' + __dirname + '/docs.html');
docsWindow.setIcon(path.join(__dirname, '/assets/icon.png'));
})
ipc.on('swapMain',function(event){
  mainWindow = new BrowserWindow({
    width: 350,
    height: 500,
  toolbar: null,
  frame: false,
  title: 'Turmy',
  transparent: true,
  webPreferences: {
    nodeIntegration: true,
    devTools: true
  }
});
mainWindow.setResizable(false);
mainWindow.loadURL('file://' + __dirname + '/main.html');
mainWindow.setIcon(path.join(__dirname, '/assets/icon.png'));
docsWindow.close();
})
app.on('window-all-closed', () => {
  app.quit();
})
