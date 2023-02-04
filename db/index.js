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

/**
 * Returns information about a cape from Minecraft: Bedrock Edition
 * @param {object} query 
 * @returns {object}
 */
async function GetBedrockCape(query) {
  const cape = await BedrockCapes.findOne({ where: query });
  if (!cape) return null;
  const players = await BedrockPlayers.findAll({ where: { capes: { [Sequelize.Op.contains]: [cape.id] } } });
  cape.dataValues.players = players;
  return cape;
}

/**
 * Returns information about all applicable capes from Minecraft: Bedrock Edition
 * @param {object} query
 * @returns {object[]}
 */
async function GetBedrockCapes(query) {
  return await BedrockCapes.findAll({ where: query });
}

/**
 * Returns information about a player from Minecraft: Bedrock Edition
 * @param {object} query 
 * @returns {object}
 */
async function GetBedrockPlayer(query) {
  return await BedrockPlayers.findOne({ where: query });
}

/**
 * Returns information about all applicable players from Minecraft: Bedrock Edition
 * @param {object} query
 * @returns {object[]}
 */
async function GetBedrockPlayers(query) {
  return await BedrockPlayers.findAll({ where: query });
}

db.sync();

module.exports = { GetBedrockCape, GetBedrockCapes, GetBedrockPlayer, GetBedrockPlayers };