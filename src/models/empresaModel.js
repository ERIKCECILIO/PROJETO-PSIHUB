var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, tipoUsuario, nome, crp, email FROM usuario`;

  return database.executar(instrucaoSql);
}

function buscarPorCrp(crp) {
  var instrucaoSql = `SELECT * FROM psicologo WHERE crp = '${crp}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, crp) {
  var instrucaoSql = `INSERT INTO psicologo (nome, crp) VALUES ('${nome}', '${crp}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCrp, buscarPorId, cadastrar, listar };
