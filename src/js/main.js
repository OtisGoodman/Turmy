const electron = require("electron");
const IPC = electron.ipcRenderer;
const shell = require("electron").shell;
const storage = require('../storage.js');
document.querySelector('.close').addEventListener('click', function() {
    IPC.send('closeMain');
});
function openExternalLink(url) {
    shell.openExternal(url)
}
function redirect(page){
    IPC.send(`swap${page}`);
}
if (storage.get("username") == undefined){
    clearStorage()
}
if (storage.get('url') == "Webhook URL"){
    document.getElementById("msg").className = "msg-d";
    document.getElementById("msg").disabled = true;
    document.getElementById("btn").className = "fire-d";
    document.getElementById("btn").disabled = true;
    document.getElementById("msg").placeholder = "Error! Please Configure!"
}
function onUpdate() {
    var content = document.getElementById("msg").value;
    if (content == ""){
        document.getElementById("btn").className = "fire-d";
        document.getElementById("btn").disabled = true;
    }else{
        document.getElementById("btn").className = "fire";
        document.getElementById("btn").disabled = false;
    }
}

function fire() {
    var content = document.getElementById("msg").value;
    IPC.send("webhook",content);
    console.warn("Webhook Fired!\n"+content);
    document.getElementById("msg").value = null;
    onUpdate()
}
function clearStorage() {
    storage.set("url","Webhook URL");
    storage.set("username","Webhook Username");
    storage.set("avatarUrl","https://i.imgur.com/aSqkpCU.png");
}
function wipeStorage() {
    storage.clear();
}