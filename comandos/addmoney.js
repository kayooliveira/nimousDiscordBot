const Discord = require("discord.js")
const db = require('quick.db');
const c = require('../config.json');

exports.run = async (client, message, args) => {

    if (!['600826313577594932'].includes(message.author.id)) {
    return message.reply(`apenas desenvolvedores!`)
    }
  
    if (!args[0]) return message.channel.send(`escreva um número`)
    if (isNaN(args[0])) return message.channel.send(`NÚMERO!!!!!`)

    let member = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;
    
    message.channel.send(`<:cartao:700491719761723503> ${message.author} adicionou **R$ ${args[0]}** na conta do membro ${member}`)
    db.add(`reais_${member.id}`, args[0])

}

exports.help = {
    name: 'addyen',
    aliases: ['addmoney']
}
