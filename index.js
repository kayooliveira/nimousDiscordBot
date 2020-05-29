const Discord = require("discord.js");
const db = require("quick.db");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// DATA PROS LOGS
let date_ob = new Date();
let date = ('0' + date_ob.getDate()).slice(-2);
let month = ('0' + (date_ob.getMonth() + 1 )).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let str_data = `${date}/${month}/${year}`;
let str_hora = `${hours}:${minutes}:${seconds}`;


require('dotenv').config()

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`${f} ✓`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("error", err => {
  console.log(err.message);
});

client.on("ready", () => {
  console.log(`I'm ready!`);

  const tabela = [
    {name: "o canto dos pássaros", type: "LISTENING"},
    {name: "Undertale", type: "PLAYING" },
    {name: "animes :3", type: "WATCHING"},
    {name: `meu papai se chama: kayoz1n#2361`, type: "LISTENING" },
    {name: `meu prefixo é - » -ajuda`, type: "LISTENING" },
    {name: "o meu papai programar", type: "WATCHING" },
    {name: `amor para ${client.users.size} usuários`, type: "STREAMING", url: "https://twitch.tv/younguei"},
    {name: `em ${client.guilds.size} servidores`, type: "PLAYING" },
    {name: `Netflix com o boy`, type: "WATCHING" },
    {name: `d!botinfo » Para mais informações sobre minha existência`,type: "LISTENING"},
    {name: `boas energias para todos do servidor`,type: "STREAMING",url: "https://twitch.tv/younguei"},
    {name: `-perfil » Crie um perfil dentro dos meus dados`, type: "LISTENING"},
    {name: `meus códigos no Glitch.com`, type: "PLAYING"},
    {name: `-about » Um texto explicando sobre mim`, type: "LISTENING"}
  ];

  function setStatus() {
    let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setPresence({ game: altstatus });
  }
  setStatus();
  setInterval(() => setStatus(), 10000);
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '𝑹𝒆𝒄𝒆𝒑𝒄̧𝒂̃𝒐');
  if(!channel) return;
  let embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username)
  .setThumbnail(member.user.displayAvatarURL())
  .setTitle(member.user.tag)
  .setDescription('Chegou no servidor!')
  .setColor('RANDOM')
  .setFooter(`Entre no canal #𝑽𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒄̧𝒂̃𝒐 para verificar-se! | em: ${str_data} ás ${str_hora}`);
  channel.send(embed);
  
let servidor = client.guilds.cache.get("708025424545972297")
let unverified = servidor.roles.cache.get('715686151993950229')
member.roles.add(unverified);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '𝑹𝒆𝒄𝒆𝒑𝒄̧𝒂̃𝒐');
  if(!channel) return;
  let embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username)
  .setThumbnail(member.user.displayAvatarURL())
  .setTitle(member.user.tag)
  .setDescription('Saiu do servidor!')
  .setColor('RANDOM')
  .setFooter(`em: ${str_data} ás ${str_hora}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  var canal = client.channels.get("698215400567079012");

  canal.send(`<:blob_sad:687040398123728975> Me excluiram de um servidor! \`${guild.name} [${guild.id}]\`\n\n__**Informações**__\n👥 » Membros: \`${guild.memberCount}\`\n👑 » Proprietário: \`${guild.owner.user.tag}\`\n🏳️ » Região: \`${guild.region}\``);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.mentions.has(client.user)) { 
      message.channel.send(`Tá bem man?! **${message.author.username}**, está perdido? Tente utilizar: \`${config.prefix}ajuda\`!`);
  }

  var messagem = db.get(`messagem_${message.guild.id}`);
  var idmessage = db.get(`messageid_${message.guild.id}`);

  if (message.channel.id === idmessage) {
    if (message.content.startsWith(`${config.prefix}`)) {
      return message.channel.send(messagem);
    }
  }

    var args = message.content.substring(config.prefix.length).split(" ");
     if (!message.content.startsWith(config.prefix)) return;

  let prefix = config.prefix;
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let command =client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if(command.help.status === 'off')return message.channel.send('**Comando desabilitado!**');
  if (command) {
    command.run(client, message, args);
  } else {
    message.channel.send(
      `:smile: **»** Tá bem man?! **${message.author.username}**, este comando é inexistente...`
    );
  }
});

client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != "715699132836085813") return

  let servidor = client.guilds.cache.get("708025424545972297")
  let membro = servidor.members.cache.get(dados.d.user_id)

  let unverified = servidor.roles.cache.get('715686151993950229')
  let cargo1 = servidor.roles.cache.get('715686285691453591')

  if(dados.t === "MESSAGE_REACTION_ADD"){
      if(dados.d.emoji.id === "708034328168366160"){
          if(membro.roles.cache.has(cargo1)) return
          membro.roles.add(cargo1)
          membro.roles.remove(unverified);
      }
  }
  if(dados.t === "MESSAGE_REACTION_REMOVE"){
      if(dados.d.emoji.id === "708034328168366160"){
          if(membro.roles.cache.has(cargo1)) return
          membro.roles.remove(cargo1)
          membro.roles.add(unverified);
      }
  }
})

client.login(process.env.DISCORD_TOKEN);
