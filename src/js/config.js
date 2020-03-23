const storage = require('../storage.js');
var shell = require("electron").shell;
const ipc = require("electron").ipcRenderer;
var defaultURL = "";
var defaultName = "Turmy";



var url = document.getElementById('url');
var username = document.getElementById('username');
var avatarUrl = document.getElementById('avatarUrl');

username.placeholder = storage.get('username');
url.placeholder = storage.get('url');
//avatarUrl.placeholder = storage.get('avatarUrl');

function openExternalLink(link) {
    shell.openExternal(link)
}
function save() {
    if(username.value != ""){
        storage.set("username",username.value);
        username.placeholder = storage.get('username');
        username.value = null;
    }
    if(url.value != ""){
        storage.set("url",url.value);
        url.placeholder = storage.get('url');
        url.value = null;
    }
    if(avatarUrl.value != ""){
        storage.set("avatarUrl",avatarUrl.value);
        avatarUrl.placeholder = storage.get('avatarUrl');
        avatarUrl.value = null;
    }
}

document.querySelector('.close').addEventListener('click', function() {
    ipc.send("swapMain")
});