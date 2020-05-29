const c = require('../config.json');  
const Discord = require('discord.js');
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  
    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Crie um texto em ASCII*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}ascii <texto>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}ascii kayozin\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff')     

  
  

    let text = encodeURIComponent(args.join(' '));
    if (!text) return message.channel.send(erro);
    const tooLong = `<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, o texto é muito longo, tente um texto menor.`;

    fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(res => res.text())
        .then(body => {
            if (body.length > 2000) return message.channel.send(tooLong);
            return message.channel.send(body, {
                code: "fix"
            });
        })
        .catch(error => {
            this.client.logger.error(error);
            return message.channel.send(text.general.error.replace(/{{err}}/g, error.message));
        });
}

exports.help = {
    name: 'ascii',
    aliases: []
}
