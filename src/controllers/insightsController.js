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
    insightsModel.publicacoesPorUsuarioGrafico() // segundo de tudo
        .then((resultado) => {
            res.status(200).json(resultado); // Retorna o json programado
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: "Erro ao buscar dados" });
        });
}

function publicacoesPorHoraGrafico(req, res) {
    insightsModel.publicacoesPorHoraGrafico() // segundo de tudo
        .then((resultado) => {
            res.status(200).json(resultado); // Retorna o json programado
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: "Erro ao buscar dados" });
        });
}

function listarPorUsuario(idUsuario, res) {
    var instrucaoSql = `SELECT * FROM avisos WHERE fk_usuario = ${idUsuario}`; // segundo de tudo

    conexao.query(instrucaoSql, function (erro, resultado) {
        if (erro) {
            res.status(500).json({ erro: erro });
        } else if (resultado.length == 0) {
            res.status(204).send(); // caso nenhuma publicação for encontrada
        } else {
            res.status(200).json(resultado); // Retorna todos os posts feitos pelo usuário
        }
    });
}





module.exports = {
    totalPublicacoes,
    publicacoesPorUsuarioGrafico,
    publicacoesPorHoraGrafico,
    listarPorUsuario
}