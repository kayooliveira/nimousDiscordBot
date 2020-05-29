const Discord = require("discord.js");

const moment = require("moment")
moment.locale('pt-BR')

exports.run = (client, message, args) => {

    function checkBots(guild) { 
        let botCount = 0; 
        guild.members.cache.forEach(member => { 
            if (member.user.bot) botCount++; 
        });
        return botCount;
    }
    
    function checkMembers(guild) { 
        let memberCount = 0; 
        guild.members.cache.forEach(member => { 
            if (!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    const online = message.guild.members.fetch(a => a.presence.status === 'online').size;
    const ocupado = message.guild.members.fetch(a => a.presence.status === 'dnd').size;
    const ausente = message.guild.members.fetch(a => a.presence.status === 'idle').size;
    const offline = message.guild.members.fetch(a => a.presence.status === 'offline').size;

    const verlvl = {
        0: `\`Sem restrições\``,
        1: `\`Baixa\``,
        2: `\`Mediana\``,
        3: `\`Alta\``,
        4: `\`Hardcore\``
      }
    
        const sicon = message.guild.iconURL; 
        const dono = message.guild.owner.user.tag;
        const region = {
            "brazil": "Brasil",
            "eu-central": "Europa Central",
            "singapore": "Singapura",
            "us-central": "U.S Central",
            "sydney": "Sydney",
            "us-east": "U.S Leste",
            "us-south": "U.S Sul",
            "us-west": "U.S Oeste",
            "eu-west": "Europa Ocidental",
            "vip-us-east": "VIP U.S Lest",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };

        const texto = (`${message.guild.channels.cache.filter(chan => chan.type === 'text').size}`)
        const voz = (`${message.guild.channels.cache.filter(chan => chan.type === 'voice').size}`)
        
        let emojis;
        if (message.guild.emojis.cache.size === 0) {
            emojis = '0';
        } else {
            emojis = message.guild.emojis.cache.size;
        }
  
        let serverembed = new Discord.MessageEmbed()
       
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setColor('AQUA')
        .addField(`__**Informações**__`, `👑 » Proprietário: ${message.guild.owner} / \`${dono}\`\n🌎 » Região: \`${region[message.guild.region]}\`\n:open_file_folder: » Nivel de Verificação: \`${verlvl[message.guild.verificationLevel]}\`\n:laughing: » Emojis: \`${emojis}\``)
        .addField(`__**Datas**__`, `⚙️ » Servidor criado em: \`${moment(message.guild.createdAt).format('LLL')}\`\n:handshake: » Você se juntou aqui em: \`${moment(message.member.joinedAt).format('LLL')}\`\n:smile: » Eu me juntei ao servidor em: \`${moment(client.joinedAt).format('LLL')}\``, true)
        .addField(`__**Canais**__ **(${texto + voz})**`, `💬 » Texto: \`${texto}\`\n🎤 » Voz: \`${voz}\``)
        .addField(`__**Membros**__ **(${message.guild.memberCount})**`,`\n:busts_in_silhouette: » Humanos: \`${checkMembers(message.guild)}\`\n:robot: » Robôs: \`${checkBots(message.guild)}\``)
        .addField(`__**Cargos**__`, message.guild.roles.cache.map(a => `\`${a.name}\``).join(", "), true)
        .setFooter(`ID: ${message.guild.id}`)
        
    message.channel.send(serverembed);
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
    name: 'serverinfo',
    aliases: ['guildinfo']
}
