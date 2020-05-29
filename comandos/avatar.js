const Discord = require("discord.js");

exports.run = (client, message, args) => {

    var membro = message.mentions.users.first() || message.author;
    
    let embed = new Discord.MessageEmbed()

    .setDescription(`**[Baixe a imagem](${membro.displayAvatarURL()})**`)
    .setImage(membro.displayAvatarURL())
    .setColor('#36393e')
    .setFooter(`Avatar do usuário: ${membro.username}`)

    message.channel.send(embed);

}

exports.help = {
    name: 'avatar',
    aliases: ['foto']
}
