const Sequelize = require('sequelize');

module.exports = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGREL_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
  }
);
