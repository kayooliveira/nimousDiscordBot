const db = require('quick.db');
const c = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Selecione o canal de punições*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}stafflog <id do canal>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}stafflog **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}modlog, ${c.prefix}punichannel\``)
  .setColor('#a67dff')      

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(" "))) return message.channel.send(erro)
    
    var canal = db.set(`punichannel_${message.guild.id}`, args.join(" ").trim())
 
    message.channel.send(`<a:yep:698221405434806282> **»** Canal de punições setado com sucesso.`)
}
exports.help = {
    name: 'punichannel',
    aliases: ['modlog', 'stafflog']
}
