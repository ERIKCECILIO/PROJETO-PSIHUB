var empresaModel = require("../models/empresaModel");

function buscarPorCrp(req, res) {
  var crp = req.query.crp;

  empresaModel.buscarPorCrp(crp).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var crp = req.body.crp;
  var nome = req.body.nome;

  empresaModel.buscarPorCrp(crp).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `o psicologo com o crp ${crp} já existe` });
    } else {
      empresaModel.cadastrar(nome, crp).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCrp,
  buscarPorId,
  cadastrar,
  listar,
};
