const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

    if (!message.mentions.users.first()) return message.channel.send(`mencione um membro!`);

    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const lewdembed = new Discord.MessageEmbed()
      .setTitle("BAKA!!!")
      .setImage(response.body.url)
      .setColor(`RANDOM`)

  message.channel.send(lewdembed);
    })
	
}

exports.help = {
  name: 'baka',
  aliases: []
}
