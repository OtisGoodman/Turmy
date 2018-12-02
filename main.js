const readline = require('readline');
const config = require("./settings");
const chalk = require("chalk")
const Discord = require('discord.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function send(message, avatar,username,webhook) {
                webhook.send(message, {
                    "username": username,
                    "avatarURL": avatar,

                }).catch(error => {
                        console.log(chalk.red(error));
                    })


}


if (config.username == "" || config.avatarUrl =="" || config.url == "" || config.token == ""){
    console.log(chalk.red('Error: Please Provide All Settings Fields'));

}else{
    const turmy = new Discord.WebhookClient(config.id, config.token);

    rl.question('What Do You Want Turmy To Say ', (content) => {
     send(content,config.avatarUrl,config.username,turmy)

    });



}












