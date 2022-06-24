const Discord = require('discord.js');
const { Client, CategoryChannel, MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete();
const m = await message.channel.send('ping?');
let ayla = new Discord.MessageEmbed()
    .setTitle('**🔌 PING**')
    .setColor("#ffffff")
    .setDescription(`🖥 · Latência do Server: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\n📲 · Latência da API: **${Math.round(
        client.ws.ping
            )}ms**`)
    .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.channel.send(ayla);
}