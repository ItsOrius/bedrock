const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve redirects
const redirects = {
  "/discord": "https://discord.gg/XwnAwF6jya"
};

Object.entries(redirects).forEach(obj => {
  app.get(obj[0], (req, res) => {
    res.redirect(obj[1]);
  });
});

// serve webpages
fs.readdirSync("./public").filter(file => file.endsWith(".html") && file != "index.html").forEach(file => {
  app.get(`/${file.replace(".html", "")}`, (req, res) => {
    res.sendFile(__dirname + `/public/${file}`);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// serve routes
fs.readdirSync("./routes").forEach(file => {
  app.use(`/api/v1/${file.replace('.js', '')}`, require(`./routes/${file}`).router);
});

// start server
app.listen(3000, () => {
  console.log('API started!');
});