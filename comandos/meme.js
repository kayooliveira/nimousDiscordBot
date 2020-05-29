const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  const lista = [
    "https://i.pinimg.com/originals/33/ba/8d/33ba8d5d05827c917d15294f871e14cf.jpg",
    "https://i.pinimg.com/564x/22/bf/81/22bf81c0555069d21a0ed04716f1c18f.jpg",
    "https://i.pinimg.com/564x/45/8c/77/458c77fe8e9aa1e28e08c614a67f701d.jpg",
    "https://i.pinimg.com/564x/f2/05/a6/f205a6701a7d7a63e5a1531b1c19816c.jpg",
    "https://i.pinimg.com/564x/15/bb/02/15bb02a1ef76eabbee571d2866e2a9dd.jpg",
    "https://i.pinimg.com/564x/7d/e3/f3/7de3f30497390f2b2a40d8ded4f1c443.jpg",
    "https://i.pinimg.com/564x/90/e5/76/90e576e7df6e57ec1d218567a5161982.jpg",
    "https://i.pinimg.com/564x/44/6b/88/446b88d153d8eb6ac38a1717e8ad25ea.jpg",
    "https://i.pinimg.com/564x/95/67/2b/95672b38442ee3ef2ff22b022893f34d.jpg",
    "https://i.pinimg.com/564x/57/6e/e8/576ee8cb4b2d41b1a2effe0edd71282e.jpg",
    "https://i.pinimg.com/236x/c1/c0/eb/c1c0ebf22781496c25d05bbd02b0f893.jpg",
    "https://i.pinimg.com/564x/d0/e3/34/d0e3341e5b658d23feccc7af04512932.jpg",
    "https://i.pinimg.com/originals/fc/46/59/fc46592985b790e8c9b6f9f2be841bca.jpg",
    "https://i.pinimg.com/originals/95/67/2b/95672b38442ee3ef2ff22b022893f34d.jpg",
    "https://i.pinimg.com/474x/4c/57/07/4c57079b03c448bf75bdeb1d2790f412.jpg",
    "https://images3.memedroid.com/images/UPLOADED157/5d612f8f23186.jpeg",
    "https://pm1.narvii.com/7115/5a8d7dc93eb9773a3bafb7e0dbd89c13f8a05b8er1-1024-718v2_hq.jpg",
    "https://diariodorio.com/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-18.23.27.jpeg"

  ]

    let altlista = lista[Math.floor(Math.random() * lista.length)]
    
    let embed = new Discord.MessageEmbed()
    
    .setColor("#36393e")
    .setImage(altlista)
    .setFooter(`Imagens de: www.pinterest.ca`, `https://seeklogo.com/images/P/pinterest-logo-CA98998DCB-seeklogo.com.png`)
  
  message.channel.send(embed)
  
}

exports.help = {
  name: 'meme',
  aliases: []
}
