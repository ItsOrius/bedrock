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
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ 
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
  partials: ['MESSAGE']
});

client.once('ready', () => { console.log(`${client.user.tag} is online!`) })

client.login(process.env.TOKEN);