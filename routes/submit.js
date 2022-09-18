const router = require("express").Router();

router.post("/", (req, res) => {
  if (req.headers.authorization != process.env["SECRET"]) return res.status(401).json({ error: "Unauthorized" });
  const { Username, Xuid, Skin, ServerAddress, Platform } = req.body;
  if (!Username || !Xuid || !Skin || !ServerAddress || !Platform) return res.status(400).json({ error: "Bad Request" });
  res.status(200).json({ message: "Success" });
});

module.exports = { router };