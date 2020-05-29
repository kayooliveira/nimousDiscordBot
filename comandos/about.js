const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
    var linguagem = ("[JavaScript](https://nodejs.org/)")
    var livraria = ("[Discord.js](https://discord.js.org/)")
    var dono = ('[kayozin](kayoz1n#2361)')
    var foto = ("https://i.imgur.com/kkfm13k.png")
   
    let embed = new Discord.MessageEmbed()
    
    .setTitle(`SOBRE`)
    .setThumbnail(foto)
    .setDescription(`Salve salve **${message.author.username}-chan** 👋,\n\n Meu nome é **Molby**, sou uma inteligência artificial, criada por ${dono}. Como eu sou uma inteligência artificial, não tenho uma idade definida, mas pode me reconhecer como maior de idade.\n Fui desenvolvida em <:nodejs:697532338992578620> ${linguagem} e <:discordjs:697532997490049115> ${livraria}. Atualmente, estou ajudando **${client.users.cache.size}** usuários, sempre tento pedir para meu papai criar novas funções para que assim, consiga te ajudar um pouco mais :3\n\nQuer ficar por dentro de minhas atualizações? Se sim, entre no meu discord = discord.gg/undefined`)
    .setImage('https://images-ext-2.discordapp.net/external/PepAACotD0hm3d46ctBREBUDRya-9O6H8RSNuMCsvAM/https/pbs.twimg.com/profile_banners/1236777937208315905/1586387895/1500x500?width=1026&height=342')
    .setFooter(`Obrigada por ler!`)
    
    
    message.author.send(embed).catch(err => {
        message.channel.send('**:octagonal_sign: Não foi possível enviar mensagens diretas pra você!**')
    })
    message.channel.send(`:mailbox: **»** Salve catioro! **${message.author.username}**, enviei pro seu PV.`)
}
exports.help = {
    name: 'about',
    aliases: []
}
