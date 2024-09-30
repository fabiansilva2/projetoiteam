const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true //só pode ter um email no banco de dados
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },

    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'clientes',
    timestamps: false
});

module.exports = Cliente;
