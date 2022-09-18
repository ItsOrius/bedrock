const router = require("express").Router();

router.post("/", (req, res) => {
  const Secret = req.headers.authorization;
  const { Username, Xuid, Platform, Skin } = req.body;
  res.send(`FIELDS: Username: ${Username}, Xuid: ${Xuid}, Platform: ${Platform}, Skin: ${Skin}`);
});

module.exports = { router };