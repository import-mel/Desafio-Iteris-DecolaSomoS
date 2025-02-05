const express = require('express');
const Router = express.Router();
const AdicionarPokemon = require('../controllers/CRUD/AdicionarPokemon');
const AtualizarPokemon = require('../controllers/CRUD/AtualizarPokemon');
const DeletarPokemon = require('../controllers/CRUD/DeletarPokemon');
const ListarPokemon = require('../controllers/CRUD/ListarPokemon');
const ConsultarPokemon = require('../controllers/CRUD/ConsultarPokemon');

Router.post('/pokedex/adicionar', AdicionarPokemon);
Router.get('/pokedex/listar', ListarPokemon);
Router.get('/pokedex/consultar/:id', ConsultarPokemon); 
Router.put('/pokedex/atualizar/:id', AtualizarPokemon);
Router.delete('/pokedex/deletar/:id', DeletarPokemon);

module.exports = Router;