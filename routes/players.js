const db = require("../db");
const router = require("express").Router();

router.get("/", (req, res) => {
  const players = db.GetBedrockPlayers();
  res.send(JSON.stringify(players));
});

router.get("/:xuid", (req, res) => {
  const player = db.GetBedrockPlayer({ xuid: req.params.xuid });
  res.send(JSON.stringify(player));
});

module.exports = { router };