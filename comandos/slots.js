const slotItems = ["🍇", "🍉", "🍋", "🍎", "️🥑", "🍓", "🍒"];
const db = require("quick.db");
const Discord = require('discord.js');
const c = require('../config.json');

exports.run = async (client, message, args) => {
  
    let user = message.author;
    let moneydb = await db.fetch(`reais_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Puxe a alavanca e teste sua sorte*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}slots <quantia>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}slots 100\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff')  


    if (!money) return message.channel.send(erro);
    if (isNaN(money)) return message.channel.send(erro)
    if (money > moneydb) return message.channel.send(`<:alert:696822589208920124> **»** Você tentou apostar uma quantia de money que não possui.`);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let winbed = new Discord.MessageEmbed()

        .setDescription(`━━━━━━━\n${slotItems[number[0]]} \`|\` ${slotItems[number[1]]} \`|\` ${slotItems[number[2]]} \n━━━━━━━`)
        message.channel.send(`Você ganhou **R$ ${money}**`, winbed)
        db.add(`reais_${user.id}`, money)
    } else {

        let winbed = new Discord.MessageEmbed()

        .setDescription(`\n━━━━━━━\n${slotItems[number[0]]} \`|\` ${slotItems[number[1]]} \`|\` ${slotItems[number[2]]} \n━━━━━━━`)
        message.channel.send(`Você perdeu **R$ ${money}**`, winbed)
        db.subtract(`reais_${user.id}`, money)
    }

}
  
exports.help = {
    name:"slots",
    aliases: ["slot"]
 }
