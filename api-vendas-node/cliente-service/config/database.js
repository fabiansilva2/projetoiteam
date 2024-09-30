const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vendas_db', 'vendas_user', '123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});

module.exports = sequelize;