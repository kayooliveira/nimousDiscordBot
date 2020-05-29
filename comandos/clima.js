var weather = require('weather-js');
const c = require('../config.json');
const Discord = require('discord.js')

exports.run = (client, message, args) => {


    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Veja o clima em alguma cidade*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}clima <cidade>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}clima rj\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}tempo\``)
  .setColor('#a67dff')   

    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        if (!result) return message.channel.send(erro)
        if (!result[0]) return message.channel.send(`<a:nop:698221501668655124> **»** Desculpe **${message.author.username}**, não encontrei essa cidade!`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**${result[0].location.name}**`)
            .addField(`**☀️ » Temperatura**`, `\`${result[0].current.temperature}°C\``, true)
            .addField(`**🌡️ » Sensação Térmica**`, `\`${result[0].current.feelslike}°C\``, true)
            .addField(`**💦 » Umidade**`, `\`${result[0].current.humidity}%\``)
            .addField(`**💨 » Vento**`, `\`${result[0].current.windspeed}\``)
            .setColor("RANDOM")
            .setThumbnail(result[0].current.imageUrl)

        message.channel.send(embed)

    });
};

exports.help = {
    name: `tempo`,
    aliases: ['clima']
};
