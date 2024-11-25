var insightsModel = require("../models/insightsModel");


function totalPublicacoes(req, res) {

    insightsModel.totalPublicacoes()
    .then(function (resultado) { // segundo de tudo
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function publicacoesPorUsuarioGrafico(req, res) {
    insightsModel.publicacoesPorUsuarioGrafico()
        .then((resultado) => {
            res.status(200).json(resultado); // Retorna o JSON esperado
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: "Erro ao buscar dados" });
        });
}

function publicacoesPorHoraGrafico(req, res) {
    insightsModel.publicacoesPorHoraGrafico()
        .then((resultado) => {
            res.status(200).json(resultado); // Retorna o JSON esperado
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: "Erro ao buscar dados" });
        });
}

function listarPerfil(req, res) {
    var idUsuario = req.params.idUsuario;  // Extrai o ID da URL
    if (!idUsuario) {
        return res.status(400).json({ erro: "ID do usuário é obrigatório." });
    }

    insightsModel.listarPerfil(idUsuario)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: "Erro ao buscar dados" });
        });
}




module.exports = {
    totalPublicacoes,
    publicacoesPorUsuarioGrafico,
    publicacoesPorHoraGrafico,
    listarPerfil
}