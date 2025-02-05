const DeletarPokemon = async (req, res) => {

    let pokemon = require('../../models/Pokemon');
    const id = req.params.id;

    const pokemonDeletado = await pokemon.findByPk(id);

    await pokemon.destroy({ where: { id_Pokemon: id }});

    return res.status(200).json({ msg: 'Pokémon deletado:' , pokemon: pokemonDeletado});
};

module.exports = DeletarPokemon;