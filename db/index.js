// setup database
const Sequelize = require('sequelize');
const db = new Sequelize.Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: '../db.sqlite'
});

// setup models
const BedrockPlayers = db.define('bedrock_players', {
  xuid: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  displayName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  skinHash: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  capes: Sequelize.TEXT
});
const BedrockCapes = db.define('bedrock_capes', {
  id: {
    type: Sequelize.TEXT,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  rarity: Sequelize.INTEGER,
  texture: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageWidth: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageHeight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

function GetBedrockCape(query) {
  return BedrockCapes.findOne({ where: query });
}

function GetBedrockCapes(query) {
  return BedrockCapes.findAll({ where: query });
}

function GetBedrockPlayer(query) {
  return BedrockPlayers.findOne({ where: query });
}

function GetBedrockPlayers(query) {
  return BedrockPlayers.findAll({ where: query });
}

db.sync();

module.exports = { GetBedrockCape, GetBedrockCapes, GetBedrockPlayer, GetBedrockPlayers };