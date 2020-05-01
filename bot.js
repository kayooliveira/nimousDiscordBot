const Discord = require("discord.js");
// Pegando a cfg do BOT
const config = require("./config/config.json");
// Loadando o fs
const fs = require("fs")
// Criando o Client do NimouzBOT
const nimouz = new Discord.Client();
// Criando o get dos comandos do BOT
nimouz.commands = new Discord.Collection();
// Criando um mapa pro MusicBot
const active = new Map();
// Localizando e carregando os comandos 
fs.readdir("./comandos/", (err, files) => {
	if(err) console.error(err);

	let arquivojs = files.filter(f => f.split(".").pop() === "js");
	arquivojs.forEach((f, i) => {
		let props = require(`./comandos/${f}`);
		console.log(`Comando ${f} iniciado`);
		nimouz.commands.set(props.help.name, props);
	});
});
// Setando a Rich Presence do BOT
// creates an arraylist containing phrases you want your bot to switch through.
const activities = [
	"🥰 beijos pro6 🥰",
	"💬 conversa fora 💬",
	"discord.gg/D5nSxMA Vem pro meu planeta ❤️"
]; 
nimouz.on('ready', () => {
	console.log(`BOT iniciado com sucesso em ${nimouz.guilds.cache.size} servidores!`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        nimouz.user.setActivity(activities[index], {type:'PLAYING'}); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});
// Comandos e respostas
nimouz.on('message', message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return message.reply("Olá, provavelmente você já está no meu servidor, porém eu ainda estou em desenvolvimento, portanto, mensagens diretas ainda não são suportadas, peço desculpas, mas estou tentando melhorar a todo momento ♥");
	if(message.content.indexOf(config.prefix) !== 0) return;
	// Setando o prefix do BOT
	let prefix = config.prefix
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	const sayMessage = args.join(" ");
	let arquivocmd = nimouz.commands.get(command.slice(prefix.length)); 
	if(arquivocmd) arquivocmd.run(nimouz, message, args, sayMessage, active);
})


nimouz.login(config.token);
