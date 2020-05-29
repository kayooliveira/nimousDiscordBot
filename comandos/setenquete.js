const db = require("quick.db");
const c = require('../config.json');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')

    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Selecione o canal de enquetes*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}setenquete <id do canal>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}setenquete **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}setvotação\``)
  .setColor('#a67dff')  


    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`) 

    if (!args.slice(0).join("")) return message.channel.send(erro)
    const canal = db.set(`idenquete_${message.guild.id}`, args.join(" ").trim())
    if (isNaN(args.join(' '))) return message.channel.send(erro)
    
    message.channel.send(`<a:yep:698221405434806282> **»** Feito com sucesso. Agora, uma enquete sera iniciada no canal: <#${canal}>.`)
      
   }
exports.help = {
    name: 'setenquete',
    aliases: ['setvotação', 'setvotacao']
}
