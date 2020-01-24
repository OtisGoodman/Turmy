const ipc = require('electron').ipcMain
const webhook = require("webhook-discord");
ipc.on('webhook', (event,url,msg,username) => {
  const wh = new webhook.Webhook(url);
  const message = new webhook.MessageBuilder()
                  .setName(username)
                  .setText(msg)
  wh.send(message);
})
