const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `\`${dias}d ${horas}h ${minutos}m ${segundos}s\``;

     message.channel.send(`:yawning_face: **|** Eu estou acordado há: ${uptime}`)

}

exports.help = {
    name: 'uptime',
    aliases: ['ontime']
}
