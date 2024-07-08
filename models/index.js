const { Sequelize, DataTypes } = require('sequelize');
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

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the sequelize instance and User model
module.exports = { sequelize, User };