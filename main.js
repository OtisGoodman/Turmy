const readline = require('readline');
const config = require("./settings");
const chalk = require("chalk")
const DiscordWebhook = require("discord-webhooks");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function turmySay() {
    rl.question('What Do You Want Turmy To Say ', (content) => {
        turmy.execute({
            content: `${content} Tbh`,
            username: "Turmy",
            avatar_url: config.avatarUrl
        });


    });
}




    if (config.url == "" || config.avatarUrl == ""){
        let turmy = new DiscordWebhook(config.url);
        turmy.on("ready", () => {
            turmySay()
        });
    }else {
        console.log(chalk.red('Error: Please Provide A Webhook Url And Or Img'));

    }








