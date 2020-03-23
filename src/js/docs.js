var shell = require("electron").shell;
const ipc = require("electron").ipcRenderer;

function openExternalLink(url) {
    shell.openExternal(url)
}

document.querySelector('.close').addEventListener('click', function() {
    ipc.send("swapMain")
});