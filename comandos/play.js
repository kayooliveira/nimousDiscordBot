var discord = require('discord.js')
var ytdl = require('ytdl-core');
var info = require('youtube-info');
var api = require("simple-youtube-api");
var convert = require('convert-seconds');

var config;
var arquivo = require('../queue.js');
var musica2;
var numero = 0 
var pl = "false";
var musica = null;
var resultado = null;
var key = new api('AIzaSyBuUq1V-pQDS-tL3HX6F4omxZNXQIVbnDw')

exports.run = (client,message,args)=>{
    var conteudo = args.slice(0).join(" ").trim();
    const voiceChannel = message.member.voice.channel;
    
    if(!voiceChannel)return message.channel.send(` **»** Salve catioro! **${message.author.username}**, para que eu toque uns beat, entre em um canal de voz.`)
    if(!conteudo.length)return message.channel.send(` **»** Salve catioro! **${message.author.username}**, escreva o nome da música que deseja ouvir.`)

var sla = ` **»** Tocando a música no canal: \`${voiceChannel.name}\``
    if(conteudo.indexOf("https://www.youtube.com/watch?v=") != "-1"||conteudo.indexOf("http://youtu.be/") != "-1"|| conteudo.indexOf("https://www.youtube.com/playlist?list=")!= "-1"){
        pl = "false";
       if(conteudo.indexOf("https://www.youtube.com/watch?v=") != "-1"){
         musica = conteudo.replace("https://www.youtube.com/watch?v=","")  
         video()
       }if(conteudo.indexOf("http://youtu.be/") != "-1"){
        musica = conteudo.replace("http://youtu.be/","") 
        video()
       }
function video(){
key.getVideoByID(musica).then(function(sucesso){
tocar()
},function(fracasso){
    message.channel.send(`<a:nop:698221501668655124> **»** Salve catioro! **${message.author.username}**, não achei nada sobre \`${conteudo}\``)
    return;
  
})
}
if(conteudo.indexOf("https://www.youtube.com/playlist?list=")!= "-1"){
pl = "true";
tocar()
}}else{
    pl = "false";
    key.searchVideos(conteudo,10).then(function(sucesso){
        if(!sucesso.length){

            message.reply(`não achei nenhum resultado para \`${conteudo}\``)
            return;

        }
     
        var embed = new discord.MessageEmbed()
        .setDescription(`:mag: **Digite um número da lista para escolher a música**\n\n${sucesso.map(musica1=>`\`${++numero}\` » ${musica1.title}`).join("\n\n")}`)
        
        .setColor("#a1a8d4");
        message.channel.send(embed)
numero = 0;
        message.channel.awaitMessages(message1=> Number(message1.content) > 0 && Number(message1.content) <= 10 && message1.author.id == message.author.id && sucesso[Number(message1.content) - 1] ,{
        maxMatches:1,
        time: 30000 ,
        errors: ['time']
        }).then(function(resultado){
      
musica = sucesso[Number(resultado.first().content) - 1].id
tocar()
          
        },function(falhou){
            message.channel.send(`<a:nop:698221501668655124> **»** Salve catioro! **${message.author.username}**, você não escolheu nenhuma opção em 30 segundos.`)
        })
    })
}
  
async function tocar(){
  
    if(!voiceChannel.permissionsFor(client.user.id).has('CONNECT'))return message.reply("eu não consigo conectar-me nesse canal.")
    if(!voiceChannel.permissionsFor(client.user.id).has("SPEAK"))return message.reply("eu não consigo falar nesse canal de voz.")
        if(message.guild.members.get(client.user.id).voiceChannel == null){
            voiceChannel.join().then(function(canal){
                if(arquivo.queue.get(message.guild.id) == null){
                    config = {
                        guild: message.guild.id,
                        channel: canal,
                        canal: message.channel.id,
                        som: {
                            titulo: [],
                            id: []
                        },
                        connection: null
                    }
                    arquivo.queue.set(message.guild.id,config)
					t()
                }else{
					t()
				}
            },function(falha){
                message.channel.send("<a:nop:698221501668655124> **»** Eu não consegui conectar-me ao seu canal de voz.")
                return;
            })
        }else{
            if(voiceChannel !== message.guild.members.get(client.user.id).voiceChannel) return message.reply("para escutar a musica, entre no canal que eu estou dando batidões e use o comando novamente.")
                if(arquivo.queue.get(message.guild.id) == null){
                    config = {
                        guild: message.guild.id,
                        channel: message.guild.members.get(client.user.id).voiceChannel,
                        canal: message.channel.id,
                        som: {
                            titulo: [],
                            id: []
                        },
                        connection: null
                    }
                    arquivo.queue.set(message.guild.id,config)
					t()
                }else{
					t()
				}
        }
function t(){
    if(pl == "false"){
    if(arquivo.queue.get(message.guild.id).som.id[0]){
        sla = `<:pepeMusic:691017094237782066> Uma musica foi adicionada na queue do canal: \`${voiceChannel.name}\``
    }
        info(musica,function(erro,music){
            if(erro){
        console.log(erro)
        return;
          }
var embed = new discord.MessageEmbed()

.setAuthor("Música adicionada na fila", message.author.avatarURL)
.setDescription(`<a:notespiral:698302197624209460> **[${music.title}](${music.url})**`)
.setThumbnail(music.thumbnailUrl)
.addField("<:youtube:698236665369461217> Canal", music.owner, true)
.addField("👀 Views", music.views, true)
.addField("<a:like:689563594639015937> Likes", music.likeCount, true)
.addField("<a:deslike:689563666785501250> Deslikes", music.dislikeCount, true)
.setColor("#e75858")

message.channel.send(embed)

     if(arquivo.queue.get(message.guild.id).som.id[0] == null){
    arquivo.queue.get(message.guild.id).som.id.push(music.videoId)
    arquivo.queue.get(message.guild.id).som.titulo.push(music.title)
    play("https://www.youtube.com/watch?v="+music.videoId)
       }else{
           arquivo.queue.get(message.guild.id).som.id.push(music.videoId)
           arquivo.queue.get(message.guild.id).som.titulo.push(music.title)
       }
        })
    }else{
        key.getPlaylist(conteudo).then(function(playlist){
            playlist.getVideos().then(sucess=>{
            for(var i = 0;sucess[i] ;i++){
                if(arquivo.queue.get(message.guild.id).som.id[0] == null){
             arquivo.queue.get(message.guild.id).som.id.push(sucess[i].id)
             arquivo.queue.get(message.guild.id).som.titulo.push(sucess[i].title)
             play("https://www.youtube.com/watch?v="+sucess[i].id)
                }else{
                    arquivo.queue.get(message.guild.id).som.id.push(sucess[i].id)
                    arquivo.queue.get(message.guild.id).som.titulo.push(sucess[i].title)
                }
            }
            message.channel.send("<:listening_music:698234132303708180> Música da playlist adicionada na queue")
            })
            },function(erro){
                message.reply("playlist não encontrada")
                return;
            })
    }
    async function play(music1){
        musica2 = await arquivo.queue.get(message.guild.id).channel.playStream(ytdl(music1,{ filter: 'audioonly' }), {volume: 0.5, passes: 3})
        arquivo.queue.get(message.guild.id).connection = musica2;
         await arquivo.queue.get(message.guild.id).connection.on("end",function(reason){
            if (reason == null){
                play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
            }else{
         arquivo.queue.get(message.guild.id).som.id.shift()
         arquivo.queue.get(message.guild.id).som.titulo.shift()
             if(arquivo.queue.get(message.guild.id).som.id[0]){
                play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
                message.channel.send(`<a:notespiral:698302197624209460> **»** Agora vou tocar: \`${arquivo.queue.get(message.guild.id).som.titulo[0]}\]\`\n\nPedido por: ${message.author}`)
             }else{

                client.guilds.get(arquivo.queue.get(message.guild.id).guild).channels.get(arquivo.queue.get(message.guild.id).canal).send(`Lista de músicas finalizada!`);
                arquivo.queue.get(message.guild.id).channel.disconnect()
                arquivo.queue.delete(message.guild.id)
             }
           }
        })
      }
    }
  }
}

exports.help = {
    status: 'off',
  name: 'play',
  aliases: ['tocar', 'p', 't']
}
