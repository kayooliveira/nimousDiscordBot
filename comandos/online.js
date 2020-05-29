const Discord = require("discord.js");

const moment = require("moment")
moment.locale('pt-BR')

exports.run = (client, message, args) => {

    message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        const totaldnd = fetchedMembers.filter(member => member.presence.status === 'dnd');
        const totalidle = fetchedMembers.filter(member => member.presence.status === 'idle');
        const totaloffline = fetchedMembers.filter(member => member.presence.status === 'offline');
        // We now have a collection with all online member objects in the totalOnline variable
        message.channel.send(`**<:online:715744344707170324> Online: ${totalOnline.size} | <:offline:715744830147526737> Offline: ${totaloffline.size} | <:idle:715744680775778324> Ausente: ${totalidle.size} <:dnd:715744582335201331> NP: ${totaldnd.size}**`);
    });
   
}

exports.help = {
    name: 'membros',
    aliases: ['membroson']
}
