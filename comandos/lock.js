const db = require("quick.db");
const Discord = require("discord.js");
const c = require('../config.json');

exports.run = async (client, message, args) => {

    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Trave o uso de comandos em um canal*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}lockchannel <id do canal>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}lockchannel **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}lock\``)
  .setColor('#a67dff')  


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(' '))) return message.channel.send(erro)
   
    var canalblock = db.set(`messageid_${message.guild.id}`, args.join(" ").trim())

    message.channel.send(`<a:yep:698221405434806282> **»** Bloqueio realizado com sucesso. Eu não responderei à comandos no canal <#${canalblock}>!`)

}

exports.help = {
    name: 'lockcommand',
    aliases: ['lock', 'lockcmd']
}
