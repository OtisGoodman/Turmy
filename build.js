var electronInstaller = require('electron-winstaller');
var settings = {
    appDirectory: './build/turmy-win32-ia32',
    outputDirectory: './build/turmy-installer',
    authors: 'Otis_Goodman',
    exe: 'turmy.exe',
    setupIcon:'./ico.ico',
    icon:'./ico.ico',
    iconUrl:"https://raw.githubusercontent.com/OtisGoodman/Turmy/master/ico.ico",
    "noMsi":true
};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log("Package Built!");
}, (e) => {
    console.error(`Error: ${e.message}`)
});