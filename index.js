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