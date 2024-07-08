const { Sequelize } = require('sequelize');
const userModel = require('./user');

const sequelize = new Sequelize(
  'railway', // database name
  'postgres', // username
  'AHQXJZPYHaHXqcGOxOhdhQtPvheAfpNq', // password
  {
    host: 'roundhouse.proxy.rlwy.net',
    dialect: 'postgres',
  }
);

module.exports = { sequelize, userModel };
