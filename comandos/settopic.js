const Discord = require("discord.js");
const c = require('../config.json');

exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, eu necessito da permissão \`MANAGE_CHANNELS\``)
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, apenas usuários com a permissão \`MANAGE_CHANNELS\` podem utilizar esse comando.`)

    message.channel.send(`<a:carregando:697639598188265552> **»** Mencione um canal para que eu crie uma descrição.`).then(m => {
        let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on("collect", c => {
            canal = c.mentions.channels.first()
            m.delete(180000)

            if (!canal) {
                message.channel.send(`<a:nop:698221501668655124> **»** Não consegui encontrar esse canal.`)
            } else {
                message.channel.send(`<a:carregando:697639598188265552> **»** Escreva o que deseja aparecer na descrição do canal ${canal}`).then(a => {
                    let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on("collect", c => {
                        desc = c.content

                        message.channel.send(`<a:yep:698221405434806282> **»** Feeeito! Adicionei um topic ao canal ${canal}`)
                        canal.setTopic(desc)
                    })
                })
            }
        })
    })
}

exports.help = {
    name: 'settipico',
    aliases: ['settopic']
}
