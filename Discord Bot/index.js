const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
      return;
  }
  if(message.content.startsWith("Hey")){
    return message.reply({
      content: `WhatsUp ☠️`
  });
  }
  if(message.content.startsWith("How")){
    return message.reply({
      content: `Abhi Kuch Nhi , Baad Mein Aao `
  });
  }
 return message.reply({
          content: "Hi from Gas Bot"
      });
});


client.on("interactionCreate", (interaction) => {
    interaction.reply("Pong!!!!!");
});

client.login(process.env.TOKEN);
