const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(`${message.author}`)
    .setTimestamp()
    .setFooter(`A inicialização foi um sucesso!`)
    .addFields(
        
        {
            name: '**ON ✅**',
            value: `quer usar algum comando? use **a!help**`,
            inline: true
        },

    )
    message.channel.send(embed);
}