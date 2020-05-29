const db = require('quick.db');
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var foto = ('https://media.tenor.com/images/17b419222d2f5d5f20e46dffd7e742a9/tenor.gif')
  
       let member = message.mentions.users.first() || message.author;
            
       let timeout = 86400000
        let amount = Math.floor(Math.random() * 1500) + 500;

        let daily = await db.fetch(`daily_${message.author.id}`);
    
       if (daily !== null && timeout - (Date.now() - daily) > 0) {
         let time = ms(timeout - (Date.now() - daily));

           message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você já coletou seu daily hoje! Pode coletá-lo em: \`${time.hours}h ${time.minutes}m ${time.seconds}s\``)
       } else {
            let embed = new Discord.MessageEmbed()

            .setTitle(`DAILY`)
            .addField(`:yen: Hoje você recebeu`, `**R$ ${amount}**`)
            .setThumbnail(foto)
            .setColor('RANDOM')

            message.channel.send(embed)
    
        db.add(`reais_${message.author.id}`, amount)
        db.set(`daily_${message.author.id}`, Date.now())
       
        }
    }

exports.help = {
    name: 'daily',
    aliases: ['diario']
}
