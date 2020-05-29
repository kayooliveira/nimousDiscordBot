const Discord = require('discord.js'); 
const moment = require("moment");
const db = require("quick.db");

const status = { 
    online: "<:online:715744344707170324> Disponivel", 
    idle: "<:idle:715744680775778324> Ausente",       
    dnd: "<:dnd:715744582335201331> Ocupado", 
    offline: "<:offline:715744830147526737> Offline" 
};
exports.run = async (client, message, args) => {
 
    var acknowledgements = 'Nenhuma';
    
   
    const member = message.mentions.members.first() || message.member;
    var dinheiro = db.get(`reais_${member.id}`)
    if (dinheiro === null) dinheiro = 0;

        let emprego = await db.get(`work_${member.id}`)
        if (emprego === 1) emprego = "💻 Programador"
        if (emprego === 2) emprego = "🔧 Mecânico"
        if (emprego === 3) emprego = "🔨 Construtor"
        if (emprego === 4) emprego = "🖌️ Designer"
        if (emprego === null) emprego = "Desempregado"
  
    let rep = db.get(`rep_${member.id}`)
    if (rep === null) rep = 0;
    
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
 
            let emb = new Discord.MessageEmbed()

            .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
            .addField(':door:  » Data de entrada nesse Discord',`\`${moment(member.joinedAt).format("LLL")}\``)
            .addField(":date: » Data de criação da conta",`\`${moment(member.user.createdAt).format("LLL")}\``)
            .addField(`:bookmark: » Cargos [${member.roles.cache.filter(r => r.id !== message.guild.id).map(a => `\`${a.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(', ') || "Nenhum cargo encontrado."}`)
            .addField(":play_pause:  » Jogando", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nenhum jogo detectado"}`)
            .addField("<:discordlogo:715717281513996308> » Status",`${status[member.user.presence.status]}`)
            .addField("🔖 » Tag", `#${member.user.discriminator}`)
            .addField(":busts_in_silhouette: » Apelido", `\`${member.nickname !== null ? `${member.nickname}` : 'Nenhum apelido.'}\``)
            .addField(":yen: » Yen", `\`R$ ${dinheiro}\``)
            .addField(":briefcase: » Emprego", `\`${emprego}\``)
            .addField(':handshake: » Reputação',  `\`${rep} RP\``)
            .setThumbnail(member.user.displayAvatarURL())
            .setColor('#068ca1')

            message.channel.send(emb)
            
}

exports.help = {
    name: 'userinfo',
    aliases: ['membroinfo']
}
