var electronInstaller = require('electron-winstaller');
var settings = {
    appDirectory: './build/turmy-win32-ia32',
    outputDirectory: './build/turmy-installer',
    authors: 'Otis_Goodman',
    exe: 'turmy.exe',
    setupIcon:'./src/assets/ico.ico',
    iconUrl:"https://raw.githubusercontent.com/OtisGoodman/Turmy/master/ico.ico",
    "noMsi":true,
    "loading_gif":"./src/assets/loading.gif"
};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log("Package Built!");
}, (e) => {
    console.error(`Error: ${e.message}`)
});