const db = require('quick.db');
const Discord = require('discord.js');
const c = require('../config.json');

exports.run = (client, message, args) => {
  
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Selecione o canal de entrada de usuários*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}welcomechannel <id do canal>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}welcomechannel **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhum\``)
  .setColor('#a67dff')  

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(" "))) return message.channel.send(erro)
    
    var canal = db.set(`autoChannel_${message.guild.id}`, args.join(" ").trim())
 
    message.channel.send(`<a:yep:698221405434806282> **»** Função finalizada com sucesso. Para ver toda a configuração completa, digite: \`-painel\`.`)
}
exports.help = {
    name: 'welcomechannel',
    aliases: ['']
}
