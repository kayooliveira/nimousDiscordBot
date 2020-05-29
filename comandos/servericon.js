const Discord = require("discord.js");

exports.run = (client, message, args) => {


    let embed = new Discord.MessageEmbed()

    .setColor('AQUA')
    .setDescription("<a:download:694000338763513876> **[Baixe a imagem](" + message.guild.iconURL() + ")**")
    .setImage(message.guild.iconURL())
    .setColor('#36393e')
    .setFooter(`${message.guild.name}`)

    message.channel.send(embed)

}

exports.help = {
    name: 'servericon',
    aliases: ['iconserver']

}
