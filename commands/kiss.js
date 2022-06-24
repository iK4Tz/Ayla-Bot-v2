const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://imgur.com/NH8oqjK.gif',
    'https://i.imgur.com/sGVgr74.gif',
    'https://i.imgur.com/8LKPbOf.gif',
    'https://i.imgur.com/TItLfqh.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para beijar!`);

  let ayla = new Discord.MessageEmbed()
  .setTitle(`💋 Beijo 😘`)
  .setDescription(`💓 ${message.author} beijou ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("PURPLE")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`KaTz.EXE`, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(ayla)
  
  }