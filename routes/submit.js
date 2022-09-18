const router = require("express").Router();

router.post("/", (req, res) => {
  if (!JSON.parse(process.env["SECRETS"]).includes(req.headers.authorization)) return res.status(401).json({ error: "Unauthorized" });
  const { Username, Xuid, Skin, ServerAddress, Platform } = req.body;
  if (!Username || !Xuid || !Skin || !ServerAddress || !Platform) return res.status(400).json({ error: "Bad Request (missing Username, Xuid, Skin, ServerAddress, or Platform). Received body: " + JSON.stringify(req.body) });
  res.status(200).json({ message: "Success" });
  console.log("=========================")
  console.log("USERNAME: " + Username);
  console.log("XUID: " + Xuid);
  console.log("SERVER ADDRESS: " + ServerAddress);
  console.log("PLATFORM: " + Platform);
  console.log("SKIN: " + Skin);
  console.log("=========================")
});

module.exports = { router };