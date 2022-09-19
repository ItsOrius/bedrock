var MongoClient = require('mongodb').MongoClient;
var url = process.env.DB;

function bedrockDB(func) {
    MongoClient.connect(url, (err, db) =>{
        var realDb = db.db('bedrocklol');
        func(err, realDb)
    });
}

module.exports = bedrockDB;
