const {app, BrowserWindow} = require('electron');
let mainWindow;
let docsWindow;
const path = require('path');
const ipc = require('electron').ipcMain
const ipcRenderer = require('electron').ipcRenderer
const webhook = require("./webhookHandler.js")

var resize = true;
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
mainWindow.loadURL('file://' + __dirname + '/html/main.html');
mainWindow.setIcon(path.join(__dirname, '/assets/icon.png'));
});
app.on('window-all-closed', () => {
  app.quit();
})
ipc.on('closeMain',function(event){
    app.quit()
})
ipc.on('swapDocs',function(event){
  mainWindow.loadURL('file://' + __dirname + '/html/docs.html');
})
ipc.on('swapMain',function(event){
  mainWindow.loadURL('file://' + __dirname + '/html/main.html');
})
ipc.on('swapConfig',function(event){
  mainWindow.loadURL('file://' + __dirname + '/html/config.html');
})
