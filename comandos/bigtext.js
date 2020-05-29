const Discord = require('discord.js');
const num_conv = require('number-to-words');
const c = require('../config.json');

module.exports.run = async (client, message, args) => {

    let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Crie um texto com letras grandes*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}bigtext <texto>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}bigtext kayozin\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`${c.prefix}letras\``)
  .setColor('#a67dff')   

    let output = args.join(' ');
    if (!output) return message.channel.send(erro);
    let bigtext_arr = new Array();
    for (let i = 0; i < output.length; i++) {
        let isnumber = await parseInt(output[i]);
        if (isnumber >= 0 && isnumber <= 9)
            bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
        else {
            if (output[i] !== ' ') {
                if (!output[i].match(/^[a-zA-Z]+$/)) // Regex for alphabetical entries
                    bigtext_arr.push(`:question:`)
                else
                    bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
            } else bigtext_arr.push('   ');
        }
    }

    try {
        await message.channel.send(bigtext_arr.join(''));
        return message.delete()
    } catch (e) {
        return message.channel.send(`<a:nop:698221501668655124> **»** Então... Infelizmente, não consegui criar. Houve algum erro! :/`)
    }


}
exports.help = {
    name: 'bigtext',
    aliases: ['emojify']

}
