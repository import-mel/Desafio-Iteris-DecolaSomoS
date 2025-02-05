const ListarPartidas = async (req, res) => {

    let Partidas = require('../../models/Batalha');
    const ListarPartidas = await Partidas.findAll();
    return res.status(200).json({Partidas: ListarPartidas});

};

module.exports = ListarPartidas;