const db = require("../db");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.GetBedrockPlayers().then((players) => {
    res.send(JSON.stringify(players));
  });
});

module.exports = { router };