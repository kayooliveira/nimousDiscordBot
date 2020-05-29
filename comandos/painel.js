const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem ver o painel de lobby do servidor!`)

   const autorole = db.get(`autoRole_${message.guild.id}`, args.join(" ").trim())
   if (autorole === null) autorole = "Sem cargo definido"
  
   const autoChannel = db.get(`autoChannel_${message.guild.id}`, args.join(" ").trim())
   if (autoChannel === null) autoChannel = "Nenhum canal definido"
  
   const mensagem = db.get(`mensagem_${message.guild.id}`, args.join(" ").trim())
   if (mensagem === null) mensagem = "Nenhuma mensagem definida" 
  
   const titulo = db.get(`titulo_${message.guild.id}`, args.join(" ").trim())
   if (titulo === null) titulo = "Nenhum titulo definido" 

  // CONFIG DOS QUE SAIREM
   const removetitle = db.get(`removeTitle_${message.guild.id}`, args.join(" ").trim())
   if (removetitle === null) removetitle = "Nenhum definido"
  
   const removemessage = db.get(`removeMessage_${message.guild.id}`, args.join(" ").trim())
   if (removemessage === null) removemessage = "Nenhuma definida" 
  
   const removecanal = db.get(`removeCanal_${message.guild.id}`, args.join(" ").trim())
   if (removecanal === null) removecanal = "Nenhum ID"

   let embed = new Discord.MessageEmbed()
   
   .setTitle(`LOBBY`)
   .setDescription(`Salve catioro! **${message.author.username}**, seja muito bem-vindo(a) ao **Painel de Lobby** do **${message.guild.name}**`)
   .setColor('BLUE')
   
   message.channel.send(embed).then(msg => {
     msg.react('715717281513996308')
     
        let filtro = (reaction, usuario) => reaction.emoji.id === "715717281513996308" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro);

        coletor.on("collect", c => {
            c.remove(message.author.id);
          
            let joined = new Discord.MessageEmbed()
            
      .setTitle(`<:discordlogo:715717281513996308> Sistema de Entrada`)
      .setColor('GREEN')
      .addField(`:bust_in_silhouette: » **AutoRole**`, `<@&${autorole}>`)
      .addField(`:speech_balloon: » **Canal**`, `<#${autoChannel}>`)
      .addField(`:clipboard: » **Mensagem**`, mensagem)
      .addField(`:ticket: » **Título**`, titulo)
            
            msg.edit(joined).then(m => {
              m.react('715717281513996308')
               
                let filter = (reaction, user) => reaction.emoji.id === "715717281513996308" && user.id === message.author.id;
                let coleter = m.createReactionCollector(filter);

                coleter.on("collect", e => {
                    e.remove(message.author.id);
                    
                    let leaved = new Discord.MessageEmbed()
                    
      .setTitle(`<:discordlogo:715717281513996308> Sistema de Saída`)
      .setColor('RED')
      .addField(`:speech_balloon: » **Canal**`, `<#${removecanal}>`)
      .addField(`:clipboard: » **Mensagem**`, removemessage)
      .addField(`:ticket: » **Título**`, removetitle)
                    
                    m.edit(leaved)
      })
   })
        })
        })
}

exports.help = {
    name: 'painel',
    aliases: []
}
