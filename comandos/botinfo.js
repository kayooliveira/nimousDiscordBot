const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require('os')
const moment = require("moment")
const c = require('../config.json');
moment.locale('pt-BR')

exports.run = (client, message, args) => {

    var linguagem = ('[JavaScript](https://www.javascript.com/)')
    var utilizando = ('[Node.js](https://nodejs.org/en/)')
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var host = ('[Glitch](https://glitch.com/)')
    var adicioneeu = ('[Adicione-me](https://discord.com/oauth2/authorize?=&client_id=715686818363998210&scope=bot&permissions=8)')
    var suporte = ('[Suporte](https://discord.gg/ZnN76E7)')
    var animesroll = ('[AnimesROLL](https://anroll.net/)')

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
 
     uptime += `\`${horas}h ${minutos}m ${segundos}s\``;

              cpuStat.usagePercent(function(err, percent, seconds) {
              

    let embed = new Discord.MessageEmbed()

   .setColor('AQUA')
   .setDescription(`Salve catioro! **${message.author.username}** :molby:!\nEspero que esteja tudo bem. Bom, meu nome é **Molby**. Eu sou uma simples inteligência artificial para o Discord, criada com intuito de ajudar ao máximo os servidores que me adicionarem. Inclusive, espero que esteja ajudando o seu :3\n Agora, fique com algumas informações minhas!`)
   .addField(`__**Estatísticas**__`, `:airplane_small: » Servidores: \`${client.guilds.cache.size}\`\n:busts_in_silhouette: » Membros: \`${client.users.cache.size}\`\n:tv: » Canais: \`${client.channels.cache.size}\``, true)
   .addField(`__**Status**__`, `:plataforma: » Plataforma: \`Windows\`\n:battery: » Arquitetura: \`x64\`\n:sleeping: » Online há: ${uptime}`, true)
   .addField(`__**CPU**__`, `:computer: » Modelo: \`${os.cpus().map(i => `${i.model}`)[0]}\`\n:servidor: » Uso: \`${percent.toFixed(2)}%\`\n:battery: » Memória Utilizada: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)  
   .addField(`__**Desenvolvedor**__`, `\n:discordlogo: » Discord: \`kayozin#4565\``, true)
   .addField(`__**Informações**__`, `:javascript: » Linguagem: ${linguagem} utilizando :nodejs: ${utilizando}\n:discordjs: » Livraria: ${livraria}\n:glitch: » Host: ${host}\n:satellite: » Latência: \`${parseInt(client.ping)} ms\`\n:date: » Eu nasci em: \`${moment(client.user.createdAt).format('LLL')}\``)
   .addField(`__**Redes**__`, `:molby: » ${adicioneeu}\n:police_officer: » ${suporte}`, true)
   .addField(`__**Parceiros**__`, `:molby: » ${animesroll}`, true)
   message.channel.send(embed)

            })
           }
      
exports.help = {
    name: 'botinfo',
    aliases: ['info', 'infobot', 'infos']
}
