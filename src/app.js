require('dotenv/config');
const pokemonRouter = require('./routes/PokemonRotas');
const BatalhasRouter = require('./routes/BatalhaRotas')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 9091;

app.use(express.json());
app.use(bodyParser.json());
app.use(pokemonRouter, BatalhasRouter);

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`);
});
