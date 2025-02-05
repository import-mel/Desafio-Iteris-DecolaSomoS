 const Batalha = async (req, res) => {

    const db = require('../../connection/db')
    const pokemon = require('../../models/Pokemon');
    const BatalhaPartida = require('../../models/Batalha');

    const { playerOneCard, playerTwoCard }  = req.body;

    const CardPokemon1 = await pokemon.findByPk(playerOneCard);
    const CardPokemon2 = await pokemon.findByPk(playerTwoCard);

    if (CardPokemon1.id_Pokemon == CardPokemon2.id_Pokemon) {
        return res.send('RESULTADO DA BATALHA: EMPATE - Jogadores escolheram o mesmo pokémon');
    }
    
    function comparacaoBatalha (a, b){
        if (a > b){
            return CardPokemon1.id_Pokemon;
        } else if (a < b) {
            return CardPokemon2.id_Pokemon;
        } else if ( a = b) {
            return 0;
        }
    };

    let playerOne = 0;
    let playerTwo = 0;

    function acumuloAtributos1 (a, b) {
        if (a > b){
            return playerOne = 1;
        } else {
            return 0;
        }
    };

    function acumuloAtributos2 (a, b) {
        if (a < b){
            return playerTwo = 1;
        } else {
            return 0;
        }
    }

    playerOne = acumuloAtributos1(CardPokemon1.hp, CardPokemon2.hp) + acumuloAtributos1(CardPokemon1.attack, CardPokemon2.attack) + acumuloAtributos1(CardPokemon1.defense, CardPokemon2.defense) +
    acumuloAtributos1(CardPokemon1.special_Attack, CardPokemon2.special_Attack) + acumuloAtributos1(CardPokemon1.special_Defense, CardPokemon2.special_Defense) + 
    acumuloAtributos1(CardPokemon1.speed, CardPokemon2.speed);

    playerTwo = acumuloAtributos2(CardPokemon1.hp, CardPokemon2.hp) + acumuloAtributos2(CardPokemon1.attack, CardPokemon2.attack) + acumuloAtributos2(CardPokemon1.defense, CardPokemon2.defense) +
    acumuloAtributos2(CardPokemon1.specia_lAttack, CardPokemon2.special_Attack) + acumuloAtributos2(CardPokemon1.special_Defense, CardPokemon2.special_Defense) + 
    acumuloAtributos2(CardPokemon1.speed, CardPokemon2.speed);

    if (playerOne == playerTwo) {
        return res.send('RESULTADO DA BATALHA: EMPATE - Pokémons com o mesmo número de atributos fortes');
    }

    let Jogador1 = 'PlayerOne';
    let Jogador2 = 'PlayerTwo';

    function PlayerVencedor (a, b){
        if (a > b){
            return Jogador1;
        } else if (a < b){
            return Jogador2;
        }
    };

    function PokemonWinner (a, b){
        if (a > b){
            return CardPokemon1.id_Pokemon;
        } else if (a < b){
            return CardPokemon2.id_Pokemon;
        }
    };

    function PokemonLoser (a, b){
        if (a > b){
            return CardPokemon2.id_Pokemon;
        } else if (a < b){
            return CardPokemon1.id_Pokemon;
        }
    };

    await db.sync();

    await BatalhaPartida.create({
        player_vencedor: PlayerVencedor(playerOne, playerTwo),
        Pokemon_winner: PokemonWinner(playerOne, playerTwo),
        Pokemon_loser: PokemonLoser(playerOne, playerTwo),
        hp: comparacaoBatalha(CardPokemon1.hp, CardPokemon2.hp),
        attack: comparacaoBatalha(CardPokemon1.attack, CardPokemon2.attack),
        defense: comparacaoBatalha(CardPokemon1.defense, CardPokemon2.defense),
        special_Attack: comparacaoBatalha(CardPokemon1.special_Attack, CardPokemon2.special_Attack),
        special_Defense: comparacaoBatalha(CardPokemon1.special_Defense, CardPokemon2.special_Defense),
        speed: comparacaoBatalha(CardPokemon1.speed, CardPokemon2.speed)
    });

    return res.status(200).json({  ResultadoDaBatalha: {
        player_vencedor: PlayerVencedor(playerOne, playerTwo), 
         Pokemon_winner: PokemonWinner(playerOne, playerTwo), Pokemon_loser: PokemonLoser(playerOne, playerTwo), details: {
            hp: comparacaoBatalha(CardPokemon1.hp, CardPokemon2.hp),
            attack: comparacaoBatalha(CardPokemon1.attack, CardPokemon2.attack),
            defense: comparacaoBatalha(CardPokemon1.defense, CardPokemon2.defense),
            special_Attack: comparacaoBatalha(CardPokemon1.special_Attack, CardPokemon2.special_Attack),
            special_Defense: comparacaoBatalha(CardPokemon1.special_Defense, CardPokemon2.special_Defense),
            speed: comparacaoBatalha(CardPokemon1.speed, CardPokemon2.speed)
        }
    } });

};

module.exports = Batalha;