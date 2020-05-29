const Discord = require("discord.js");
const c = require('../config.json');
exports.run = async (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
    try {
  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Deixe que eu crie um canal para seu servidor*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}criarcanal <tipo> <nome>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}criarcanal Voice Conversando\``, true)
  .addField(`:bookmark: **Permissão**`, `\`MANAGE_CHANNELS\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}createchannel\``)
  .setColor('#a67dff')  
      if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, eu necessito da permissão \`MANAGE_CHANNELS\` para criar um canal.`)
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você precisa da permissão \`MANAGE_CHANNELS\`.`)
        if (!args[1]) return message.channel.send(erro);
        if (!args[0]) return message.channel.send(erro);

      message.channel.send(`<a:yep:698221405434806282> » Canal criado com sucesso!`).then(() => {
          message.guild.createChannel(args[1], args[0], []).catch((err) => {
            message.channel.send(`<a:nop:698221501668655124> **»** Salve catioro! **${message.author.username}**, ocorreu um erro ao criar esse canal!`)
          });
        });
      } catch (err) {
        message.channel.send(err).catch();
      }
    }
exports.help = {
    name: 'createchannel',
    aliases: ['criarcanal']
}
