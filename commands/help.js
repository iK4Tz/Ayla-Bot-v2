const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(` Minha lista de comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: '**abraçar | hug**',
            value: `comando para abraçar!`,
            inline: true
        },

        {
            name: '**beijar | beijo | kiss**',
            value: `comando para beijar!`,
            inline: true
        },

        {
            name: '**tapa | slap**',
            value: `comando para tapa!`,
            inline: true
        },

        {
            name: '**avatar | av**',
            value: `comando para avatar!`,
            inline: true
        },

    )
    message.channel.send(embed);
}