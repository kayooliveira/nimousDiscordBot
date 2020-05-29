const db = require('quick.db');
const c = require('../config.json');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Aposte seus R$ comigo*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}apostar <quantia>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}apostar 100\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff')  
  
    var money = await db.get(`reais_${message.author.id}`)
      
    var numeroaposta = parseInt(args[0]);
    if (!numeroaposta) return message.channel.send(erro)

    if (isNaN(numeroaposta)) return message.channel.send(erro)  

    if (numeroaposta > money) { 
        return message.channel.send(`<a:nop:698221501668655124> **»** Salve catioro! **${message.author.username}**, você não possui **R$ ${numeroaposta}**!`)
    }

    if (message.content.includes('!')) { 
        return message.reply(`está tentando abusar? Olha ein!`)
    }

    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){
  
        let wining = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}**, você apostou **R$ ${numeroaposta}** e **GANHOU**! <a:like:689563594639015937>`)
        .addField(`<:yenbag:700521423076196412> Agora você possui`, `**R$ ${money + numeroaposta}**`)
        .setColor('#8effa1')
        message.channel.send(wining)
        db.add(`reais_${message.author.id}`, numeroaposta)

    }
    else {
        
      let losing = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}**, você apostou **R$ ${numeroaposta}** e **PERDEU**! <a:deslike:689563666785501250>`)
      .addField(`<:yenbag:700521423076196412> Agora você possui`, `**R$ ${money - numeroaposta}**`)
      .setColor('#831c00')
        message.channel.send(losing)
        db.subtract(`reais_${message.author.id}`, numeroaposta)
      }
}

exports.help = {
    name: 'aposta',
    aliases: ['apostar']
}
