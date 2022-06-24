const Discord = require("discord.js");
module.exports = {
    name: "clear",
    author: "Ayla",
    servidor: "https://discord.gg/Z3dcWSQdNE",


run: async(client, message, args) => {

    let ayla_author = message.author;
    let ayla_msg_erro_sem_perm = "Você não possui a permissão \`Gerenciar Mensagens\`";
    let ayla_numeros = args[0];

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${ayla_author} ${ayla_msg_erro_sem_perm}.`);

  const ayla_contador_msg_del = parseInt(args[0], 10);

  let ayla_msg_erro_msgs_del = "Insira um número entre 1-99.";

  if (!ayla_contador_msg_del || ayla_contador_msg_del < 1 || ayla_contador_msg_del > 99) return message.channel.send(`:x: | ${ayla_author} ${ayla_msg_erro_msgs_del}`);

  const ayla_apagando_msg = await message.channel.messages.fetch({
    limit: ayla_contador_msg_del + 1
  });
  message.channel.bulkDelete(ayla_apagando_msg);
  let msg_nao_embed = `✅ | ${ayla_author} apagou \`${ayla_numeros}\` mensagens!`;
  let msg_embed = new Discord.MessageEmbed() .setColor("RANDOM") .setDescription(`${ayla_author} apagou \`${ayla_numeros}\` mensagens!`) .setFooter(`Limpeza realizada`, "https://gifimage.net/wp-content/uploads/2018/11/know-your-place-trash-gif-1.gif")
  message.channel.send(msg_embed).then(msg => msg.delete({timeout: 9000}))
}};