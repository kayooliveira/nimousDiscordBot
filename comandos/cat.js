const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    randomPuppy('cat')
    .then(url => {

        let embed = new Discord.MessageEmbed()
        .setDescription(`:cat: Gatinho`)
        .setImage(url)
        .setColor('#36393e')
        return message.channel.send({ embed });
    })
}

exports.help = {
    name: 'cats',
    aliases: ['gatos', 'cat', 'gato']
}
