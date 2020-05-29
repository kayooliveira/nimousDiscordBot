const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const moment = require('moment')
moment.locale('pt-BR')

module.exports.run = async (client, message, args) => {

  const search = `${args}`;
  if (!search) return message.reply('escreva o nome de um anime!')
  var foto = ('https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png')
  malScraper.getInfoFromName(search)
    .then((data) => {
  var traileu = (`**[Clique aqui](${data.trailer})**`)
    const malEmbed = new Discord.MessageEmbed()
      .setTitle(`My Anime List - Resultado de pesquisa para ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setDescription(data.synopsis)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField(':books: Episódios', data.episodes, true)
      .addField('<:poll:696812460702695586> Avaliação', data.score, true)
      .addField(':flag_jp: Título em Japonês', data.japaneseTitle, true)
      .addField(':woman_tipping_hand: Gênero', data.genres, true)
      .addField(':date: Data de Exibição', data.aired, true)
      .addField(':movie_camera: Trailer', traileu)
      .addField(`Produtora`, data.producers)

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));




}

module.exports.help = {
  name: "anime",
  aliases: []
}
