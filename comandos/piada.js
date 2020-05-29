const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  const lista = [
    "Por que a Aranha é o animal mais carente do mundo?\n\nPor que ela é um Arac*needyou*",
    "Um caipira chega na casa de um amigo que está vendo TV e pergunta:\n\n- E ai, firme?\n\nO amigo responde:\n\nNão, futebor.",
    "O que o *pagodeiro* foi fazer na Igreja?\n\nCantar *pá* god.",
    "Sabe por que o Napoleão era chamado para as festas?\n\nPorque ele era *Bom na Party*",
    "Você conhece a piada do Pônei?\n\n- Não\n\n- Pô nei eu KKKKKKKKKKKKKKKKKKKKKK",
    "Sabe o que o Sr. Pato falou para a Sra. Pata?\n\n\"*Vem quá*\"",
    "Qual o nome de uma *maconha* enrolada em um papel de jornal?\n\nBaseado em fatos reais.",
    "O que a Xuxa foi fazer no bar?\n\nFoi beber *ca Sasha*",
    "Por que a formiga tem, apenas quatro patas?\n\nPorque se fosse cinco patas, seria *Fivemiga*",
    "Sabe quando foi a primeira vez que os Americanos comeram carne?\n\nQuando o Cristóvão chegou *Com Lombo*",
    "Por que o *Batman* tranca o bat-móvel?\n\nPois ele tem medo que *Róbin*"
  ]

    let alternativa = lista[Math.floor(Math.random() * lista.length)]
  
  message.channel.send(`${alternativa}`)
  
}

exports.help = {
  name: 'piada',
  aliases: []
}
