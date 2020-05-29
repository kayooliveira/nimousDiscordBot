const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  if (!message.member.voiceChannel) return message.reply(`mas você nem está ouvindo música :thinking:`)
  if (!message.guild.me.voiceChannel) return message.reply(`eu não estou tocando música!`)
  
  if (message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.reply(`conecte-se ao mesmo canal que estou!`)
  
  message.guild.me.voiceChannel.leave();
  
  let embed = new Discord.MessageEmbed()
  
  .setDescription(`**${message.author.username}**, de acordo com seu pedido, sai do canal.`)
  
  message.channel.send(embed)
  
}

exports.help = {
  name: 'stop',
  aliases: ['s', 'leave', 'l']
}
