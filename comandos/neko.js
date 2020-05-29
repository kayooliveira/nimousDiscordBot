const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/ngif");
    
    let embed = new Discord.MessageEmbed()
    .setColor("#36393e")
    .setDescription(`<a:Nekoo:694376158493409340> Neko-niiii`)
    .setImage(body.url) 
    message.channel.send({embed})

}
exports.help = {
    name: 'neko',
    aliases: []
}
