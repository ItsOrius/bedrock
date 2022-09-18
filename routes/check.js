const router = require("express").Router();

router.get("/", (req, res) => {
  if (!JSON.parse(process.env["SECRETS"]).includes(req.headers.authorization)) return res.status(401).json({ error: "Unauthorized" });
  res.status(200).json({ message: "Authorized" });
});

module.exports = { router };