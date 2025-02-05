const Sequelize = require('sequelize');
const db = require('../connection/db');

const BatalhaPartidas = db.define('partidas', {

    id_Partida: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    player_vencedor:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    Pokemon_winner: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },

    Pokemon_loser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    hp: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    special_Attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    special_Defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    speed: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = BatalhaPartidas;