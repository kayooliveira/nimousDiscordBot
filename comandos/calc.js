const Discord = require('discord.js');
const math = require('mathjs');
const c = require('../config.json');
const ms = require('ms');

exports.run = async (client, message, args) => {

    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Deixe-me te ajudar com alguma conta de matemática*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}calcular <conta>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}calcular 1+1\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}conta, ${c.prefix}calc, ${c.prefix}calculadora\``)
  .setColor('#a67dff')   

    var thumb = ('https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/calculator-icon.png')  
    var conta = args.slice(0).join(' ');
    if (!conta) return message.reply(erro);
  
      let embed = new Discord.MessageEmbed()
    
    .setTitle(`CALCULADORA`)
    .addField(`:pencil: » Questão`, `**${conta}**`)
    .addField(`:nerd: » Resultado`, `**${math.eval(conta)}**`)
    .setThumbnail(thumb)

   message.channel.send(embed)

}

exports.help = {
  name: 'calc',
  aliases: ['conta', 'calculadora', 'calcular']
}
