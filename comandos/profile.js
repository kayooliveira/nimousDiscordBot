const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;
    let reais = await db.get(`reais_${member.id}`)
    if (reais === null) reais = 0;
  
    let rep = await db.get(`rep_${member.id}`)
    if (rep === null) rep = 0;
  
    let emprego = await db.get(`work_${member.id}`)
    if (emprego === null) emprego = "Desempregado"
    if (emprego === 1) emprego = "💻 Programador"
    if (emprego === 2) emprego = "🔧 Mecânico"
    if (emprego === 3) emprego = "🔨 Construtor"
    if (emprego === 4) emprego = "🖌️ Designer"
  
  
    let desc = await db.get(`desc_${member.id}`)
    if (desc === null) desc = "Nenhuma biografia definida";

    let embed = new Discord.MessageEmbed()
    
    .setDescription(`${desc}`)
    .addField(`:yen: **Yen**`, `\`R$ ${reais}\``, true)
    .addField(`:handshake: **Reputação**`, `\`${rep} RP\``, true)
    .addField(`:briefcase: **Emprego**`, `\`${emprego}\``)
    .setFooter(`Perfil de: ${member.username}`, member.avatarURL())
    .setColor('#36393e')

    message.channel.send(embed)
}

exports.help = {
    name: 'profile',
    aliases: ['perfil']
}
