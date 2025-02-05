const Vitorias = async (req, res) => {
     
    const Vitoria = require('../../models/Batalha');

    const countJogador1  = await Vitoria.count({
        where: {
            player_vencedor: 'PlayerOne'
        }
    });

    const countJogador2  = await Vitoria.count({
        where: {
            player_vencedor: 'PlayerTwo'
        }
    });

    return res.status(200).json({
        PlayerOne: countJogador1,
        PlayerTwo: countJogador2
    });
};

module.exports = Vitorias;