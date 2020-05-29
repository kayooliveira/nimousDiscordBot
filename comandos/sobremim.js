const db = require('quick.db');
const c = require('../config.json');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Escreva algo sobre vc*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sobremim <texto>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sobremim Adoro cafezin\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}biografia\``)
  .setColor('#a67dff') 

    const bio = db.set(`desc_${message.author.id}`, args.join(" ").trim())
    if (!args[0]) return message.channel.send(erro)
    message.channel.send(`<a:yep:698221405434806282> **»** Nova biografia adicionada ao seu perfil com sucesso. Para ver: \`d!perfil\``)
}

exports.help = {
    name: 'sobremim',
    aliases: ['biografia', 'bio']
}
