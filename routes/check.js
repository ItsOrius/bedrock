const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.headers.authorization != process.env["SECRET"]) return res.status(401).json({ error: "Unauthorized" });
  res.status(200).json({ message: "Authorized" });
});

module.exports = { router };