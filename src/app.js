const {app, BrowserWindow} = require('electron');
let mainWindow;
let docsWindow;
const path = require('path');
const ipc = require('electron').ipcMain;
const ipcRenderer = require('electron').ipcRenderer;
const webhook = require("./webhookHandler.js");
if (require('electron-squirrel-startup')) return;

function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {
        detached: true
      });
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      spawnUpdate(['--createShortcut', exeName]);
      setTimeout(application.quit, 1000);
      return true;
    case '--squirrel-uninstall':
      spawnUpdate(['--removeShortcut', exeName]);
      setTimeout(application.quit, 1000);
      return true;
    case '--squirrel-obsolete':
      application.quit();
      return true;
  }
};
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
