const { REST, Routes } =require('discord.js');
require('dotenv').config();

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
    
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
  
      // Register the commands with Discord API
      await rest.put(Routes.applicationCommands("1289853219694055516"), { body: commands });
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error('Error while reloading commands:', error);
    }
  })();