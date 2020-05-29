const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {


    randomPuppy('dog')
    .then(url => {

        let embed = new Discord.MessageEmbed()
        .setDescription(`:dog: Doguinho`)
        .setImage(url)
        .setColor('#36393e')
        return message.channel.send({ embed });
   
 })
}

exports.help = {
    name: 'dogs',
    aliases: ['cachorros', 'dog', 'cachorro']
}
