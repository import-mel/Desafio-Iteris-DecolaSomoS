
const AdicionarPokemon = async (req, res) => {

    let db = require('../../connection/db');
    let pokemon = require('../../models/Pokemon');
    const { name, category, type, hp,  attack, defense, special_Attack, special_Defense, speed } = req.body;
    
    await db.sync();
    const novoPokemon = await pokemon.create({

       name, category, type, hp, attack, defense, special_Attack, special_Defense, speed 

    });
        return res.status(200).json ({msg: 'NOVO POKEMON ADICIONADO A POKEDEX: ', pokemon: novoPokemon });
}
module.exports = AdicionarPokemon;