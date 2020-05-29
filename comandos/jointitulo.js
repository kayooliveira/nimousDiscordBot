const db = require('quick.db');
const Discord = require('discord.js');
const c = require('../config.json');

exports.run = (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
      let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Escreva um título para a mensagem de boas vindas*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}welcometitle <título>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}welcometitle WELCOME\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff')      

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    
    db.set(`titulo_${message.guild.id}`, args.join(" ").trim())
 
    message.channel.send(`<a:yep:698221405434806282> **»** Função finalizada com sucesso. Para ver toda a configuração completa, digite: \`-painel\`.`)}
exports.help = {
    name: 'welcometitle',
    aliases: ['']
}
