const Discord = require('discord.js');
const c = require('../config.json');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`apenas administradores podem utilizar esse comando!`)

    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Dê uma bronca em quem não se comporta*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}warn <@user> <motivo>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}Warn @kayozin totoso\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff') 

  let motivo = args.slice(1).join(' ');
  if (!motivo) return message.channel.send(erro)
    
  let membro = message.mentions.users.first() || message.guil.members.get(args[0]);
  if (!membro) return message.channel.send(erro);
  if (membro === message.member) return message.reply(`mencione outro membro!`)
 

  let embed = new Discord.MessageEmbed()

    .setAuthor(`WARN`, membro.avatarURL)
    .setColor("RED")
    .setDescription(motivo)
    .setFooter(`Responsável: ${message.author.username}`, message.author.avatarURL);

    membro.send(embed)
    message.reply(`aviso enviado!`)
}
exports.help = {
    name: "warn",
    aliases: ["aviso"]
}
