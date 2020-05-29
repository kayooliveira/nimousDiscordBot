const db = require('quick.db');
const ms = require('parse-ms')
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

      const foto = ('https://digitalsoft.in/wp-content/uploads/2017/01/image015.png')

    let timeout = 1.8e+7
    let quantia = Math.floor(Math.random() * 500) + 250;
    let trabalho = await db.fetch(`work_${message.author.id}`);

    if (trabalho !== null && timeout - (Date.now() - trabalho) > 0) {
     let time = ms(timeout - (Date.now() - trabalho));
      
      let timerr = new Discord.MessageEmbed()

      .setDescription(`<a:nop:698221501668655124> Agora não é hora de trabalhar!`)
      .addField(`:timer: Tente novamente em`, `\`${time.hours}h ${time.minutes}m ${time.seconds}s\``)
      
      .setThumbnail(message.author.avatarURL)
      message.channel.send(timerr)
   
     } else {
        let emprego = await db.get(`work_${message.author.id}`)
        if (emprego === 1) emprego = "💻 Programador"
        if (emprego === 2) emprego = "🔧 Mecânico"
        if (emprego === 3) emprego = "🔨 Construtor"
        if (emprego === 4) emprego = "🖌️ Designer"
       
        if (emprego === null) {
          return message.reply(`para trabalhar, você precisa de um emprego! Utilize \`d!emprego\`.`)
        } else {
          
        }

        let embed = new Discord.MessageEmbed()

        .setTitle(`TRABALHAR`)
        .addField(`:moneybag: Hoje você recebeu`, `**R$ ${quantia}**`)
        .addField(`:briefcase: Emprego`, `**${emprego}**`)
        .setThumbnail(foto)
        .setColor('RANDOM')
        
        message.channel.send(embed)
        db.add(`reais_${message.author.id}`, quantia)
        db.set(`work_${message.author.id}`, Date.now())
    }
}

exports.help = {
    name: 'trabalhar',
    aliases: ['work']
}
