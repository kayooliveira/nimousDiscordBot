const Discord = require('discord.js')
var Jimp = require("jimp")
const c = require('../config.json')

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*MEU DEUSO, as primeiras palavras do bebê!!!*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}firstword <texto>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}firstword papai\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}primeiraspalavras\``)
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
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.reply('ocorreu um erro ao criar a imagem :cry:')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                let attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send(`Eu não tenho a permissão necessária para fazer isso. \`ATTACH_FILES\``)
            }
        }
    }
}

exports.help = {
    name: "primeiraspalavras",
    aliases: ['firstword', 'pp']
}
