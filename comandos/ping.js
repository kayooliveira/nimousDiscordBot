const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle(`CONEXÃO`)
  .setDescription(`:rocket: Minha latência é de: \`${parseInt(client.ping)}\` ms`)
  .setColor('#7a1a5f')
  
  message.channel.send(embed)
    
  }
exports.help = {
    name: 'ping',
    aliases: ['latencia', 'latência']
}
