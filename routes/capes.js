const db = require("../db");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.GetBedrockCapes({ verified: true }).then((capes) => {
    res.send(JSON.stringify(capes));
  });
});

module.exports = { router };