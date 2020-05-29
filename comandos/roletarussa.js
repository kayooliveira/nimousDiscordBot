const Discord = require("discord.js");

exports.run = (client, message, args) => {

    const random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){

        message.channel.send(`Rodou o cartucho e você **SOBREVIVEU**! :sweat_smile:`)

    }
    else{

        message.channel.send(`Rodou o cartucho e você **MORREU**! :cry:`)
      }
}

exports.help = {
    name: 'roletarussa',
    aliases: []
}
