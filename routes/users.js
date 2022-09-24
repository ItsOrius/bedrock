const bedrockDB = require("../db");
const router = require("express").Router();

router.get("/", (req, res) => {
  bedrockDB(function (err, bedrockDB) {
    const bedrockUsers = bedrockDB.collection('users');
    bedrockUsers.find({}).toArray(function (err, result) {
       if (err) throw err;
       res.send(JSON.stringify(result));
    });
 });
});

module.exports = { router };