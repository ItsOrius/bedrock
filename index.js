require("dotenv").config();
const fs = require("fs");
const path = require("path")

// express
const express = require("express");
const app = express();

const redirects = {
  "/discord": "https://discord.gg/XwnAwF6jya"
};

Object.entries(redirects).forEach(obj => {
  app.get(obj[0], (req, res) => {
    res.redirect(obj[1]);
  });
});

app.listen(3000, () => {
  console.log('API started!');
});





// discord.js
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages],
  partials: [Partials.Message]
});
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(client, interaction);
  } catch (error) {
    await interaction.reply({ content: `**There was an error while executing this command!**\`\`\`${error}\`\`\``, ephemeral: true });
  }
});

client.once('ready', () => { console.log(`${client.user.tag} is online!`) })

client.login(process.env.TOKEN);