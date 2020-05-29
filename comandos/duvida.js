const Discord = require("discord.js");
const c = require('../config.json');

exports.run = (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Pergunte para mim, a mais sábia!*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}duvida <dúvida>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}duvida Sou lindo?\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}pergunta\``)
  .setColor('#a67dff')   

    var replies = ["Sim", "Não"];
    var result = Math.floor((Math.random() * replies.length));
    
    var duvida = args.slice(0).join(" ");
    if (!duvida) return message.channel.send(erro)
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('GOLD')
    .addField(`:thinking: » **Dúvida**`, `${duvida}`)
    .addField(`:person_tipping_hand: » Resposta`, `${replies [result]}`)
    
    message.channel.send(embed)
}

exports.help = {
    name: 'duvida',
    aliases: ['pergunta', 'dúvida']
}
