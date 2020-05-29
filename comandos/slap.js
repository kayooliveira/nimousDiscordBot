const Discord = require('discord.js');
const superagent = require('superagent');
const c = require('../config.json');

exports.run = async (client, message, args) => {

    if (!message.mentions.users.first()) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa mencionar um membro.`);
    if (message.mentions.users.first().id === "653691138229927936") return message.reply('por que deseja me bater? O que eu te fiz?!');
    if (message.mentions.users.first().id === "530192493728366622") return message.channel.reply(`não deixarei você bater em meu papai!`);
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setDescription(`**${message.author.username}** deu um tapa em **${message.mentions.users.first().username}**! :raised_hand:`)
    .setImage(body.url) 
    message.channel.send({embed})
}
exports.help = {
    name: 'slap',
    aliases: ['tapa']
}   
