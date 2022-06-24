const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user;
  try {
      user = client.users.cache.get(args[0]) || message.mentions.users.first() || await client.users.fetch(args[0])
  } catch {
      user = message.author
  }

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed()

    .setColor('PURPLE')
    .setTitle(`Avatar de ${user.username}`)
    .setDescription(`📲 **Clique [Aqui](${avatar}) para baixar**`)
    .setImage(avatar)
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed);
};