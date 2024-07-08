const { Sequelize } = require('sequelize');
const userModel = require('./user');
const pg = require('pg');

const sequelize = new Sequelize(
  'railway', // database name
  'postgres', // username
  'AHQXJZPYHaHXqcGOxOhdhQtPvheAfpNq', // password
  {
    host: 'roundhouse.proxy.rlwy.net',
    dialect: 'postgres',
    port: '23982',
    dialectModule: pg
  }
);

module.exports = { sequelize, userModel };
