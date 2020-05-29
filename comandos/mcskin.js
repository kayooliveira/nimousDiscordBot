const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('cite um nick de minecraft!')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Nickname: ${args[0]}`)
        .setDescription(`<a:download:694000338763513876> **[Baixe-a](https://mc-heads.net/body/${args[0]})**`)
        .setImage(`https://mc-heads.net/body/${args[0]}`)
        .setFooter(`Pedido por: ${message.author.username}`, message.author.avatarURL)
        .setColor('RANDOM')
    message.channel.send(embed)
}

exports.help = {
    name: 'mcskin',
    aliases: ['skin']
}
