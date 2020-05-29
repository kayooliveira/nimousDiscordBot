const Discord = require("discord.js");
const c = require('../config.json');
const db = require('quick.db');
const ms = require('parse-ms')

exports.run = async (client, message, args) => { 
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Adicione uma reputação para quem lhe ajudou*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}rep <@user>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}rep @kayozin\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}rp, ${c.prefix}reputação\``)
  .setColor('#a67dff')    


    let timeout = 86400000 
    let tempo = await db.fetch(`tempo_${message.author.id}`);

    if (tempo !== null && timeout - (Date.now() - tempo) > 0) {
        let time = ms(timeout - (Date.now() - tempo));
        message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você já deu uma reputação há pouco tempo! Tente novamente em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``)
} else {
    let member = message.mentions.users.first()
    if (member === message.author) return message.channel.send(`<:alert:696822589208920124> **»** Você não pode dar reputação para si mesmo.`)
    if (!member) return message.channel.send(erro)

    let embed = new Discord.MessageEmbed()
    .setDescription(`:handshake: __**REPUTAÇÃO**__\n\n:busts_in_silhouette: » Membro: \`${member.username}\`\n:crown: » Quantia: \`1 RP\``)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Autor: ${message.author.username}`, message.author.avatarURL)
    .setColor('GOLD')

    message.channel.send(embed) 
    db.add(`rep_${member.id}`, 1)
    db.set(`tempo_${message.author.id}`, Date.now())
        }
}

exports.help = {
    name: 'rep', 
    aliases: ['reputacao', 'rp', 'reputação'] 
}
