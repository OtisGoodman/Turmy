const ipc = require('electron').ipcMain;
const webhook = require("webhook-discord");
var storage = require("./storage.js")
ipc.on('webhook', (event,msg) => {
  const wh = new webhook.Webhook(storage.get('url'));
  const message = new webhook.MessageBuilder()
                  .setName(storage.get('username'))
                  .setText(msg)
  wh.send(message);
  storage.set('ping',"pong")
  console.log(storage.get("ping"))
});
