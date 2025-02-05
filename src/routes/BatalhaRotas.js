const express = require('express');
const Router = express.Router();
const BatalhaPartida = require('../controllers/BATALHA/BatalhaFinal');
const ListarPartidas = require('../controllers/BATALHA/ListarPartidas');
const VitoriasAcumuladas = require('../controllers/BATALHA/VioriasAcumuladas');


Router.post('/batalha', BatalhaPartida);
Router.get('/batalha/partidas', ListarPartidas);
Router.get('/batalha/jogadores', VitoriasAcumuladas)

module.exports = Router;