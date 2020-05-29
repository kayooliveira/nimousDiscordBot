const Discord = require('discord.js');
const c = require('../config.json');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Dê um abraço em alguém*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}abraço <@user>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}abraço @kayozin\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}hug, ${c.prefix}abraçar\``)
  .setColor('#a67dff')  

    if (!message.mentions.users.first()) return message.channel.send(erro);
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setDescription(`**${message.author.username}** deu um abraço em **${message.mentions.users.first().username}** :busts_in_silhouette:`)
    .setImage(body.url) 
    message.channel.send({embed})
}
exports.help = {
    name: 'hug',
    aliases: ['abracar', 'abraçar', 'abraco', 'abraço']
}   
