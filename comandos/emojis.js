const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    try {
      let notAnimated = []
      let animated = []
  
      message.guild.emojis.cache.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString())
        else notAnimated.push(emoji.toString())
      })
  
      if (!animated[0]) animated = ['Nenhum emoji']
      if (!notAnimated[0]) notAnimated = ['Nenhum emoji animado']
  
      let embed = new Discord.MessageEmbed()

      .setDescription('Emojis em gif: \n' + animated.join(' ') + '\n\nEmojis normais: \n' + notAnimated.join(' '))

      message.channel.send(embed)
    } catch (err) {
      message.channel.send('Erro :/ \n' + err).catch()
    }
  }
  
  exports.help = {
    name: 'emojis',
    aliases: []
  }
