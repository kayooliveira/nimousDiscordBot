const Discord = require("discord.js");
const c = require('../config.json');

exports.run = (client, message, args) => { 

    var akuraavatar = ("https://cdn.discordapp.com/avatars/653691138229927936/afba2dcbc2b7bb06907e8a3fd6f0e1dc.png?size=2048")

    message.channel.send(`:mailbox: **»** Salve catioro! **${message.author.username}**, verifique suas mensagens privadas...`)

  let embed = new Discord.MessageEmbed()
  .setTitle(":hammer: PAINEL DE AJUDA")
  .addField(`🔧 \`Utilitários\``, `anime, avatar, addemoji...`)
  .addField(`👮 \`Moderação\``, `ban, kick, warn...`)
  .addField(`🎁 \`Entretenimento\``, `ascii, bigtext, lembrete...`)
  .addField(`🎵 \`Música\``, `play, stop...`)
  .addField(`💸 \`Economia\``, `apostar, slots, trabalhar...`)
  .addField(`🥺 \`Cute\``, `cat, dog, neko...`)
  .addField(`<a:Minecraft_cubo:697633523049299989> \`Minecraft\``, `mcskin, mchead...`)
  .addField(`❤ \`Interação\``, `kiss, slap, hug...`)
  .addField(`👋 \`Entrada\``, `welcomechannel, welcomemessage, autorole...`)
  .addField(`🍃 \`Saida\``, `leavechannel, leavemessage, leavetitle...`)
  .addField(`💻 \`Desenvolvedor\``, `eval, addyen, removeyen...`)
  .addField(`🤖 \`Bot\``, `cpu, about, convite...`)
  .addField(`⚙️ \`Configuráveis\``, `lock, stafflog, sobremim...`)
  .setColor("#bb99ff")
  .setThumbnail(akuraavatar)
  
message.author.send({embed}).then(msg=>{
      msg.react('🔧').then(r => {
      msg.react('👮').then(r => {
      msg.react('🎁').then(r => {
      msg.react('🎵').then(r => {
      msg.react('💸').then(r => {
      msg.react('🥺').then(r => {
      msg.react('697633523049299989').then(r => {
      msg.react('❤').then(r => {
      msg.react('👋').then(r => {
      msg.react('🍃').then(r => {
      msg.react('💻').then(r => {  
      msg.react('🤖').then(r => {    
      msg.react('⚙️').then(r => {      
      msg.react('🔙').then(r => {
  
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  })
  }) 
  })

  const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
  const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
  const EntretenimentoFilter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;
  const MúsicaFilter = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
  const EconomiaFilter = (reaction, user) => reaction.emoji.name === '💸' && user.id === message.author.id;
  const ZueiraFilter = (reaction, user) => reaction.emoji.name === '🥺' && user.id === message.author.id;
  const MinecraftFilter = (reaction, user) => reaction.emoji.id === '697633523049299989' && user.id === message.author.id;
  const InteraçãoFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
  const RegistroFilter = (reaction, user) => reaction.emoji.name === '👋' && user.id === message.author.id;
  const OutrosFilter = (reaction, user) => reaction.emoji.name === '🍃' && user.id === message.author.id;
  const DeveloperFilter = (reaction, user) => reaction.emoji.name === '💻' && user.id === message.author.id;
  const BotFilter = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
  const ConfigFilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
  const BackFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
  
  const Utilidades = msg.createReactionCollector(UtilidadesFilter);
  const Moderação = msg.createReactionCollector(ModeraçãoFilter);
  const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
  const Música = msg.createReactionCollector(MúsicaFilter);
  const Economia = msg.createReactionCollector(EconomiaFilter);
  const Zueira = msg.createReactionCollector(ZueiraFilter);
  const Minecraft = msg.createReactionCollector(MinecraftFilter);
  const Interação = msg.createReactionCollector(InteraçãoFilter);
  const Registro = msg.createReactionCollector(RegistroFilter);
  const Outros = msg.createReactionCollector(OutrosFilter);
  const Developer = msg.createReactionCollector(DeveloperFilter);
  const Robot = msg.createReactionCollector(BotFilter);
  const Config = msg.createReactionCollector(ConfigFilter);
  const Back = msg.createReactionCollector(BackFilter);

  Utilidades.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle("🔧 Utilitários")
          .addField(`\`${c.prefix}addemoji <nome> <link>\``, `Adicione um emoji ao servidor de forma mais fácil`)
          .addField(`\`${c.prefix}anime <nome>\``, `Veja algumas coisas sobre algum anime`)
          .addField(`\`${c.prefix}avatar <@user>\``, `Amplie o avatar de um membro`)
          .addField(`\`${c.prefix}calc <conta>\``, `Dificuldades com alguma conta? Eu te ajudo!`)
          .addField(`\`${c.prefix}clear <quantidade>\``, `Deixe-me mensagens de um canal`)
          .addField(`\`${c.prefix}clima <cidade>\``, `Veja o clima em sua e outras cidades`)
          .addField(`\`${c.prefix}emojis\``, `Veja todos os emojis do servidor`)
          .addField(`\`${c.prefix}anuncio\``, `Crie um anúncio em um canal`)
          .addField(`\`${c.prefix}pesquisa\``, `Responda algumas perguntas para nos ajudar`)
          .addField(`\`${c.prefix}roleinfo <id do cargo>\``, `Veja as características de um cargo`)
          .addField(`\`${c.prefix}servericon\``, `Amplie o avatar do servidor`)
          .addField(`\`${c.prefix}serverinfo\``, `Obtenha informações do servidor`)
          .addField(`\`${c.prefix}userinfo <@user>\``, `Tenha informações de um membro`)
          .setColor("#cfcfcf")
      msg.edit(embed);
  })

  Moderação.on('collect', r2 => {
    r2.remove(message.author.id); 
      embed = new Discord.MessageEmbed()
          .setTitle("👮 Moderação")
          .addField(`\`${c.prefix}ban <@user> <motivo>\``, `Aplique uma punição pesada`)
          .addField(`\`${c.prefix}createchannel <tipo> <nome>\``, `Crie um canal, escolhendo o tipo e nome`)
          .addField(`\`${c.prefix}say\``, `Faça-me falar alguma coisa`)
          .addField(`\`${c.prefix}kick <@user> <motivo>\``, `Aplique uma punição leve`)
          .addField(`\`${c.prefix}warn <@user> <texto>\``, `Avise um membro sobre sua má postura`)
          .setColor("#6efdff")
      msg.edit(embed);
  })

  Entretenimento.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle("🎁 Entretenimento")
          .addField(`\`${c.prefix}ascii <texto>\``, `Crie um texto em ASCII`)
          .addField(`\`${c.prefix}bigtext <texto>\``, `Crie uma mensagem com letras maiores O_o`)
          .addField(`\`${c.prefix}lembrete <tempo>\``, `Marque um tempo para eu te lembrar`)
          .addField(`\`${c.prefix}dado\``, `De 1 a 6, em qual o dado para?`)
          .addField(`\`${c.prefix}duvida <texto>\``, `Tire sua dúvida comigo`)
          .addField(`\`${c.prefix}faketweet <@conta> <texto>\``, )
          .addField(`\`${c.prefix}firstword <texto>\``, `Diga as primeiras palavras de um bebe`)
          .addField(`\`${c.prefix}laranjo <texto>\``, `Crie um meme do laranjo`)
          .addField(`\`${c.prefix}meme\``, `Desestresse um pouco e veja alguns memes`)
          .addField(`\`${c.prefix}piada\``, `Leia algumas piadas de tiozão`)
          .addField(`\`${c.prefix}perfil <@user>\``, `Veja o perfil de um membro`)
          .addField(`\`${c.prefix}reverse <texto>\``, `Leia de tras pra frente um texto`)
          .addField(`\`${c.prefix}roletarussa\``, `Está a fim de brincar com a morte?`)
          .setColor("#fff942")
      msg.edit(embed);
  })

  Música.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle("🎵 Música")
          .addField(`\`${c.prefix}play <nome>\``, `Vou tocar uma música que você escolher`)
          .addField(`\`${c.prefix}stop\``, `Pare a música que esta tocando`)
          .setColor("#5542ff")
      msg.edit(embed);
  })
  
  Economia.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle("💸 Economia")
          .addField(`\`${c.prefix}apostar <quantia>\``, `Aposte seu money comigo`)
          .addField(`\`${c.prefix}daily\``, `Colete seu money diário`)
          .addField(`\`${c.prefix}emprego <emprego>\``, `Escolha em qual emprego deseja ingressar e receber um salário`)
          .addField(`\`${c.prefix}yen <@user>\``, `Veja o seu saldo bancário ou de algum membro`)
          .addField(`\`${c.prefix}pay <@user> <quantia>\``, `Sabe o dinheiro daquela coxinha que você está devendo? Pague com o seu money virtual`)
          .addField(`\`${c.prefix}slots <quantia>\``, `Puxe a alavanca e teste sua sorte`)
          .addField(`\`${c.prefix}trabalhar\``, `Trabalhe e ganhe o seu salário`)
          .setColor("#23a300")
      msg.edit(embed);
  })
  
  Zueira.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle(":pleading_face: Cute")
          .addField(`\`${c.prefix}cat\``, `Veja a foto de um gato fofucho`)
          .addField(`\`${c.prefix}dog\``, `Veja a foto de um doguinho lindo`)
          .addField(`\`${c.prefix}neko\``, `Preciso explicar isso? >.<`)
          .setColor("#a3002b")
      msg.edit(embed);
  })
  
  Minecraft.on('collect', r2 => {
          embed = new Discord.MessageEmbed()
          .setTitle("<a:Minecraft_cubo:697633523049299989> Minecraft")
          .addField(`\`${c.prefix}mcskin <nome>\``, `Veja a skin de um jogador`)
          .addField(`\`${c.prefix}mchead <nome>\``, `Veja a cabeça de um jogador`)
          .setColor("#5cffb3")
      msg.edit(embed);
    
    
  })
 
  Interação.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle("❤ Interação")
          .addField(`\`${c.prefix}baka <@user>\``, `Chame aquele seu amigo de BAKA`)
          .addField(`\`${c.prefix}cocegas <@user>\``, `Faça cócegas em algum usuário`)
          .addField(`\`${c.prefix}hug <@user>\``, `Dê um abraço de urso em algum usuário`)
          .addField(`\`${c.prefix}shippar <@user> <@user2>\``, `Veja o quanto você ama um certo membro`)
          .addField(`\`${c.prefix}reputação <@user>\``, `Algum membro te ajudou? Ajude-o também, dando uma reputação ao mesmo`)
          .addField(`\`${c.prefix}slap <@user>\``, `Está com raiva de um membro? Desconte dando um tapa nele(a)`)
          .addField(`\`${c.prefix}kiss <@user>\``, `Dê um beijo molhado em um membro`)
          .setColor("#ff5c5c")
      msg.edit(embed);
  })

  Registro.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
          .setTitle(":wave: Entrada")
          .addField(`\`${c.prefix}autorole <id do cargo>\``, `Adicione um cargo aos novos membros`)
          .addField(`\`${c.prefix}welcomechannel <id do canal>\``, `Selecione um canal para receber os novos membros`)
          .addField(`\`${c.prefix}welcomemessage <texto>\``, `Escreva uma mensagem para a embed`)
          .addField(`\`${c.prefix}welcometitle <titulo>\``, `Escreva o titulo para a embed`)
          .setColor("#d5ff7a")
      msg.edit(embed);
  })
  
  Outros.on('collect', r2 => {
    r2.remove(message.author.id); 
      embed = new Discord.MessageEmbed()
          .setTitle("🍃 **Saída**")
          .addField(`\`${c.prefix}leavechannel <id do canal>\``, `Selecione um canal para se despedir de membros`)
          .addField(`\`${c.prefix}leavemessage <texto>\``, `Escreva uma mensagem para a embed`)
          .addField(`\`${c.prefix}leavetitle <titulo>\``, `Escreva o titulo para a embed`)
          .setColor("#7affb4")
      msg.edit(embed);
  })

  Developer.on('collect', r2 => { 
    embed = new Discord.MessageEmbed()
        .setTitle("💻 **Desenvolvedor**")
        .addField(`\`${c.prefix}addyen <quantia>\``, `Adicione uma quantia de money para algum membro`)
        .addField(`\`${c.prefix}removeyen <quantia\``, `Remova uma quantia de money de algum membro`)
        .addField(`\`${c.prefix}eval <sintax>\``, `Testar algum comando ou function com a Akura`)
        .setColor("##696969")
    msg.edit(embed);
})

Robot.on('collect', r2 => { 
    r2.remove(message.author.id);
    embed = new Discord.MessageEmbed()
        .setTitle("🤖 **Bot**")
        .addField(`\`${c.prefix}about\``, `Saiba o por que estou aqui`)
        .addField(`\`${c.prefix}convite\``, `Receba o link para me adicionar`)
        .addField(`\`${c.prefix}cpu\``, `Veja o estado atual da minha CPU`)
        .addField(`\`${c.prefix}botinfo\``, `Saiba mais informações sobre mim`)
        .addField(`\`${c.prefix}lab\``, `Entre em meu Laboratório`)
        .addField(`\`${c.prefix}painel\``, `Visualize o painel de Entrada e Saída do servidor`)
        .addField(`\`${c.prefix}ping\``, `Quer saber em quantos ms minha latência se encontra? Utilize esse comando`)
        .addField(`\`${c.prefix}uptime\``, `Veja há quanto tempo não durmo`)
        .setColor("#ffe0ab")
    msg.edit(embed);
})

Config.on('collect', r2 => { 
    r2.remove(message.author.id);
    embed = new Discord.MessageEmbed()
        .setTitle("⚙️ **Configuraveis**")
         
        .addField(`\`${c.prefix}lockcommand <id do canal>\``, `Trave o uso de comandos em um canal`)
        .addField(`\`${c.prefix}messagelock <texto>\``, `Adicione uma mensagem ao travar o uso de comandos em um canal`)
        .addField(`\`${c.prefix}stafflog <id do canal>\``, `Selecione um canal para enviar punições`)
        .addField(`\`${c.prefix}sobremim <texto>\``, `Escreva uma biografia para seu perfil`)
        .addField(`\`${c.prefix}setenquete <id do canal>\``, `Eu irei setar o canal de enquetes`)
        .addField(`\`${c.prefix}setsugestao <id do canal>\``, `Deixe-me criar um sistema de sugestões para seu servidor`)
        .addField(`\`${c.prefix}settopic\``, `Adicione um topico para um canal`)
        .setColor("#abafff")
    msg.edit(embed);
})
   
  Back.on('collect', r2 => { 
    r2.remove(message.author.id);
      embed = new Discord.MessageEmbed()
  .setTitle(":hammer: PAINEL DE AJUDA")
  .addField(`🔧 \`Utilitários\``, `anime, avatar, addemoji...`)
  .addField(`👮 \`Moderação\``, `ban, kick, warn...`)
  .addField(`🎁 \`Entretenimento\``, `ascii, bigtext, lembrete...`)
  .addField(`🎵 \`Música\``, `play, stop...`)
  .addField(`💸 \`Economia\``, `apostar, slots, trabalhar...`)
  .addField(`🥺 \`Cute\``, `cat, dog, neko...`)
  .addField(`<a:Minecraft_cubo:697633523049299989> \`Minecraft\``, `mcskin, mchead...`)
  .addField(`❤ \`Interação\``, `kiss, slap, hug...`)
  .addField(`👋 \`Entrada\``, `welcomechannel, welcomemessage, autorole...`)
  .addField(`🍃 \`Saida\``, `leavechannel, leavemessage, leavetitle...`)
  .addField(`💻 \`Desenvolvedor\``, `eval, addyen, removeyen...`)
  .addField(`🤖 \`Bot\``, `cpu, about, convite...`)
  .addField(`⚙️ \`Configuráveis\``, `lock, stafflog, sobremim...`)
  .setColor("#bb99ff")
  .setThumbnail(akuraavatar)
      msg.edit(embed);
  })
});
};
exports.help = { 
    name: 'ajuda',
    aliases: ['help', 'comandos', 'commands'] 
}
