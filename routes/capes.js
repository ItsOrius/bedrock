const db = require("../db");
const router = require("express").Router();

router.get("/", (req, res) => {
  const capes = db.GetBedrockCapes({ verified: true });
  res.send(JSON.stringify(capes));
});

router.get("/:id", (req, res) => {
  const cape = db.GetBedrockCape({ id: req.params.id });
  res.send(JSON.stringify(cape));
});

module.exports = { router };