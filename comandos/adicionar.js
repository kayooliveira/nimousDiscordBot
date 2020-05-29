const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let embed = new Discord.MessageEmbed()

    .setDescription(`:smile: Salve catioro! **${message.author.username}**, clique **[AQUI](https://discord.com/oauth2/authorize?=&client_id=715686818363998210&scope=bot&permissions=8)**, para me adicionar.`)
    .setColor('#36393e')

    message.author.send(embed)
    message.channel.send(`:mailbox: **»** Salve catioro! **${message.author.username}**, verifique suas mensagens privadas...`)

}

exports.help = {
    name: 'convidar',
    aliases: ['adicionar', 'convite']
}
