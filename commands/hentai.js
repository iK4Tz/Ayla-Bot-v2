const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`πγLista de sites **Hentai's**`)
        .setThumbnail("https://rlv.zcache.com.br/ahegao_excited_enfrenta_a_etiqueta-re4f9873a787f48fc9546a67534480552_0ugmc_8byvr_540.jpg")
        .setFooter("Aproveite! mas tome cuidado.", "https://c.tenor.com/RMKz605idq4AAAAM/fbi.gif")
        .addFields(
        {
            name: '**HANIME**',
            value: `γ [Hanime](${"https://hanime.tv"}) `,
            inline: false
        },
        {
            name: '**HENTAI HAVEN**',
            value: `γ [Hentai Haven](${"https://hentaihaven.xxx"}) `,
            inline: false
        },
        {
            name: '**NHENTAI**',
            value: `γ [nHentai](${"https://nhentai.xxx"}) `,
            inline: false
        },
    )
    message.channel.send(embed);
}