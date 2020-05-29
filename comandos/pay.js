const Discord = require("discord.js")
const db = require('quick.db')
const c = require('../config.json');

exports.run = async (client, message, args, config) => {
  
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Pague yens para um usuário*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}pay <@user> <quantia>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}pay @yong 100\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}pagar\``)
  .setColor('#a67dff')  

    const member = message.mentions.users.first() 

    const money = db.get(`reais_${message.author.id}`)

    if (!member) {
        return message.channel.send(erro)
    }
  
    if (member === message.author) {
        return message.reply(`mencione outro usuário!`)
    }
  
    if (!args[1]) {
        return message.channel.send(erro)
    }
  
    if (!args[0]) {
        return message.channel.send(erro)
    }

    if (args[1] < 1) {
      return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, coloque um número acima de **R$ 1,00**`)
    }

    if (message.content.includes('isisisisisiasdfddfkayozinbrarbodemais')) { 
        return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você está tentando abusar?`)
    }
  
   if (isNaN(args[1])) {
     return message.channel.send(`lll`)
   }

    if (money < args[1]) {
        return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você não possui **R$ ${args[1]}**.`)
    }

    message.channel.send(`Salve catioro! **${message.author.username}**, você realmente deseja pagar **R$ ${args[1]}** ao membro **${member.username}**?`).then(s => {
      s.react('708747447869898893')
        let filtro = (reaction, usuario) => reaction.emoji.id === "708747447869898893" && usuario.id === message.author.id;
        let coletor = s.createReactionCollector(filtro, {max: 1, time: 36000});

        coletor.on("collect", c => {
            c.remove(message.author.id);
          
          message.channel.send(`:thumbsup:  **»** Pronto **${message.author.username}**, pagamento feito com êxito!`)
          s.delete()
         db.add(`reais_${member.id}`, args[1])
         db.subtract(`reais_${message.author.id}`, args[1])
           
     })
    })
}

exports.help = {
    name: 'pay',
    aliases: ['pagar']
}
