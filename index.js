const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const redirects = {
  "/discord": "https://discord.gg/XwnAwF6jya"
};

Object.entries(redirects).forEach(obj => {
  app.get(obj[0], (req, res) => {
    res.redirect(obj[1]);
  });
});

fs.readdirSync("./public").filter(file => file.endsWith(".html")).forEach(file => {
  app.get(`/${file.replace(".html", "")}`, (req, res) => {
    res.sendFile(__dirname + `/public/${file}`);
  });
});

app.listen(3000, () => {
  console.log('API started!');
});