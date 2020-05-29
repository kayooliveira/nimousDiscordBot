const Discord = require('discord.js')
const c = require('../config.json');
var Jimp = require("jimp")

exports.run = async (client, message, args) => {
  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Crie um meme do Laranjo*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}laranjo <@user>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}laranjo @kayozin\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff')  

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send(erro)
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send(`<:alert:696822589208920124> **»** Você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?`)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('Processando...').then(message => {
                    Jimp.read(`https://media.discordapp.net/attachments/689750456695914586/691077705071984710/295364123043211.png?width=540&height=482`, function (err, image) {
                        if (err) message.channel.send('ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 23, 310, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'laranjo.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.reply('eu não tenho a permissão necessária para fazer isso. `ATTACH_FILES`')
            }
        }
    }
}

exports.help = {
    name: "laranjo",
    aliases: []
}
