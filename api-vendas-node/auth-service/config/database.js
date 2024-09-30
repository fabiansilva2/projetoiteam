const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vendas_db', 'vendas_user', '123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
