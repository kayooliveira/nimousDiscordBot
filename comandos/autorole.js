const db = require('quick.db');
const Discord = require('discord.js');
const c = require('../config.json');

exports.run = (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
      let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Selecione o cargo que irei adicionar ao membro entrar*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}welcomerole <id do cargo>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}welcomerole **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}autorole\``)
  .setColor('#a67dff')    


    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    
    db.set(`autoRole_${message.guild.id}`, args.join(" ").trim())
 
    message.channel.send(`<a:yep:698221405434806282> **»** Função finalizada com sucesso. Para ver toda a configuração completa, digite: \`d!painel\`.`)}
exports.help = {
    name: 'autorole',
    aliases: ['welcomerole']
}
