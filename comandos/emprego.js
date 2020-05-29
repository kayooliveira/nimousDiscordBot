const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  var emprego = await db.get(`work_${message.author.id}`)
  if (emprego === 1) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você já tem um emprego! (💻 Programador)`)
  if (emprego === 2) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você já tem um emprego! (🔧 Mecânico)`)
  if (emprego === 3) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você já tem um emprego! (🔨 Construtor)`)
  if (emprego === 4) return message.channel.send(`<:alert:696822589208920124> **»** Salve catioro! **${message.author.username}**, você já tem um emprego! (🖌️ Designer)`)

  let embed = new Discord.MessageEmbed()
  .setDescription(`Em qual emprego você deseja ingressar?\n\n💻 \`Programador\`\n🔧 \`Mecânico\`\n🔨 \`Construtor\`\n🖌️ \`Designer\``)
  .setFooter(`Clique em um dos emojis para selecionar seu emprego`)
  .setColor('#03fc7b')
  
  message.channel.send(embed).then(msg => {

    msg.react('💻').then(() => msg.react('🔧').then(() => msg.react('🔨').then(() => msg.react('🖌️'))))

    const filter = (reaction, user) => {
      return ['💻', '🔧', '🔨', '🖌️'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name === '💻') {
          message.reply('agora você é um `💻 Programador`');
          db.add(`work_${message.author.id}`, 1)
        } 
      
        if (reaction.emoji.name === '🔧') {
          message.reply('agora você é um `🔧 Mecânico`');
          db.add(`work_${message.author.id}`, 2)
        }
      
       if (reaction.emoji.name === '🔨') {
          message.reply('agora você é um `🔨 Construtor`');
          db.add(`work_${message.author.id}`, 3)
       }
      
       if (reaction.emoji.name === '🖌️') {
         message.reply('agora você é um `🖌️ Designer`')
         db.add(`work_${message.author.id}`, 4)
       }
      
      })
      .catch(collected => {
        message.reply('devido à sua demora, cancelei o pedido! Tente novamente.');
      });
    })
  }

exports.help = {
  name: 'emprego',
  aliases: []
}
