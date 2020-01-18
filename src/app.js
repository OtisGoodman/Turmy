//Inits The Winows
const {app, BrowserWindow} = require('electron');
let mainWindow;
let docsWindow;

//Requires
function createMain(){
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
}
function createDocs(){
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
docsWindow.setResizable(false);
docsWindow.loadURL('file://' + __dirname + '/docs.html');
docsWindow.setIcon(path.join(__dirname, '/assets/icon.png'));
}
const path = require('path');
const ipc = require('electron').ipcMain
app.on('ready', () => {
createMain()
});
ipc.on('closeMain',function(event){
    app.quit()
     })
ipc.on('swapDocs',function(event){
mainWindow.quit()
createDocs()
})  
app.on('window-all-closed', () => {
  app.quit();
})
