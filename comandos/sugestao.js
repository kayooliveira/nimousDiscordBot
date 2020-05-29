const Discord = require('discord.js');
const c = require('../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {

     let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Deixe uma sugestão para melhorar o servidor*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sugestão <sugestão>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sugestão Adicionar um canal de voz\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}sugerir\``)
  .setColor('#a67dff')    
  
    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(erro)
        return undefined;
    }

    const embed = new Discord.MessageEmbed()

        .setTitle(`NOVA SUGESTÃO!`)
        .addField(`:bust_in_silhouette: Autor`, `${message.author}`)
        .addField(`:bulb: Sugestão`, mensg)
        .setColor('RANDOM')

        var canal = message.guild.channels.cache.get(db.get(`idsugestao_${message.guild.id}`))
        if (!canal) return message.reply(`esse Discord não possui um canal definido para envio de sugestões. Caso seja um Administrador, defina o canal utilizando a sintaxe: \`d!setsugestão\``)
              
  
        canal.send(embed)
        .then(function (msg) {
            msg.react("689563594639015937"); // like
            msg.react("689563666785501250"); // deslike 

            message.reply(`sua sugestão foi enviada ao ${canal}! :mailbox_with_no_mail:`)
        }).catch(function (error) {
            console.log(error);
        });
}

exports.help = {
    name: "sugestao",
    aliases: ["sugerir", "sugestão" ]
}
