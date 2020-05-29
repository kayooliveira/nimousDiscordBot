const Discord = require("discord.js");
const c = require('../config.json');

exports.run = async (client, message, args) => {
  let inline = true
  var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
  let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Veja algumas informações de um cargo*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}roleinfo <id do cargo>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}roleinfo **ID**\``, true)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma\``)
  .setColor('#a67dff') 

    let role = args.join(` `);
    if(!role) return message.channel.send(erro);

    let gRole = message.guild.roles.cache.find(`id`, role)
    if(!gRole) return message.channel.send(erro);
    
    const status = {
        false: "Não",
        true: "Sim"
      }

    let roleemebed = new Discord.MessageEmbed()

    .setColor('#36393e')
    .addField("<:Akura_notify:689743263086804993> » **Menção**", `\`<@${gRole.id}>\``, inline)
    .addField(":rainbow: » **HexColor**", gRole.hexColor, inline)
    .addField(":busts_in_silhouette: » **Membros com esse cargo**", gRole.members.size, inline)
    .addField(":chart_with_upwards_trend: » **Posição**", gRole.position, inline)
    .addField(":star: » **Cargo alto?**", status[gRole.hoist], inline)
    .addField("<:Akura_notify:689743263086804993> » **Mencionavel?**", status[gRole.mentionable], inline)
    
    message.channel.send(`\`${gRole.name}\``, roleemebed);

}

exports.help = {
  name: 'roleinfo',
  aliases: ['cargoinfo']
}
