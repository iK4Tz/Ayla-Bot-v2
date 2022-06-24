const Discord = require('discord.js');
const Client = new Discord.Client();
const config = require("./config.json");
const Canvas = require('canvas')

Client.on('ready', async () => {
    let activities = [
        `BETA - v1.7.0`
    ],
    i = 0;
    setInterval(() => Client.user.setActivity(`${activities[i++ % activities.length]}`,  {
        type: "PLAYING",url:"https://www.twitch.tv/ik4tz" //WATCHING, LISTENING, PLAYING, STREAMING
        }), 3000 * 60);
    Client.user
        .setStatus("dnd") //idle, dnd, online, invisible
        .catch(console.log);
    console.log(`Fui iniciado em ${Client.guilds.cache.size} Servidor(es)`);
});

Client.on("message", async message => {
    if (message.author.bot) return false;
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try {
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(Client, message, args);
    } catch (err) {}
});

Client.on('guildMemberAdd', async (member) => {

    let foto = "https://wallpapercave.com/wp/wp2207569.png"; // Coloque o link da foto que será utilizada na entrada do servidor.

    let chave = {};

    chave.create = Canvas.createCanvas(1024, 500);
    chave.context = chave.create.getContext('2d');
    chave.context.font = '72px sans-serif';
    chave.context.fillStyle = '#ffffff';

    Canvas.loadImage(foto).then( async (i) => {

        chave.context.drawImage(i, 0, 0, 1024, 500);
        chave.context.beginPath();
        chave.context.stroke();
        chave.context.fill();

        let chat = Client.guilds.cache.get(member.guild.id).channels.cache.get('937552773191462994'); // Coloque o ID do canal de entrada.

        chave.context.font = '42px sans-serif',
        chave.context.textAlign = 'center';

        chave.context.fillText(`${member.user.tag}`, 480, 437);
        chave.context.beginPath();
        chave.context.arc(521, 200, 119, 0, Math.PI * 2, true);
        chave.context.closePath();
        chave.context.clip();

        await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024})).then( async (i) => {

            chave.context.drawImage(i, 393, 80, 238, 238);

        })

        let mensagem = new Discord.MessageAttachment(chave.create.toBuffer(), `${member.user.tag}.png`)

        chat.send({ content: `${member}`, files: [mensagem] }).catch(e => {

            console.log(e)

        })
        
    })
})

Client.on("message", msg => {
    if (msg.content === `<@!${Client.user.id}>`)
            msg.channel.send(' `🔇 Marca não random, precisa de ajuda? digite a!help.` '); 
  });

Client.login(config.token);