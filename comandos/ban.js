const Discord = require("discord.js");
const db = require('quick.db');
const c = require('../config.json');

exports.run = (client, message, args) => {
  
    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Aplique uma punição pesada*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}ban <@user> <motivo>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}ban @kayozin Totoso\``, true)
  .addField(`:bookmark: **Permissão**`, `\`BAN_MEMBERS\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}banir\``)
  .setColor('#a67dff')  
   
       var membro = message.mentions.members.first() || message.guild.members.get(args[0]);
       if (!membro) return message.channel.send(erro);
       if (membro === message.member) return message.channel.send(`<a:nop:698221501668655124> **»** Salve catioro! **${message.author.username}**, você não pode se banir!`)
       
       var motivo = args.slice(1).join(" ");
       if (!motivo) return message.channel.send(erro);
       
       if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(erro)
  
       let banembed = new Discord.MessageEmbed()

       .setDescription(`**${message.author.username}**, você realmente deseja aplicar essa punição em **${membro.user.username}**?`)
       .setColor('AQUA')
       .setFooter(`Clique no emoji para confirmar ou espere 30s para cancelar!`)

       message.channel.send(banembed).then(msg => { 
         msg.react("👍");
   
         let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id; 
         let coletor = msg.createReactionCollector(filtro, {max: 1, time: 30000});


         coletor.on("collect", em => { 
             em.remove(message.author.id);
             
             let embed = new Discord.MessageEmbed()

             .setTitle(`:hammer: Ban`)
             .setDescription(`:bust_in_silhouette: » Membro: \`${membro.user.tag}\`\n\n:police_officer: » Responsável: ${message.author}\n\n:notepad_spiral: » Motivo: ${motivo}`)
             .setColor('#0000')
             var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
             if (!canal) {
              message.channel.send(`Caso deseje escolher um canal para enviar punições, utilize: \`${c.prefix}stafflog\``, embed)
              membro.ban(); 
             } else {
              canal.send(embed)
              membro.ban(); 
             
            }
         });
        });
}
exports.help = {
    name: 'ban',
    aliases: ['banir']
}
