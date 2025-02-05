const ListarPokemon = async (req, res) => {

    let pokemon = require('../../models/Pokemon');
    const Todospokemons = await pokemon.findAll();
    return res.status(200).json({pokemons: Todospokemons});

};

module.exports = ListarPokemon;