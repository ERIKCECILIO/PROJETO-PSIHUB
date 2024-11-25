var express = require("express");
var router = express.Router();
// const multer = require('multer'); // configurando imagem né paizao

var insightsController = require("../controllers/insightsController");

router.get("/listarTotalPublicacoes", function (req, res) { // primeiro de tudo
    insightsController.totalPublicacoes(req, res);
});


router.get("/listarpublicacoesPorUsuario", function (req, res) { // primeiro de tudo
    insightsController.publicacoesPorUsuarioGrafico(req, res);
});


router.get("/listarAtividadePorHora", function (req, res) { // primeiro de tudo
    insightsController.publicacoesPorHoraGrafico(req, res);
});

router.get('/listarPerfil/:idUsuario', function (req, res) {
    insightsController.listarPerfil(req, res);  // primeiro de tudo chame a função e o idUsuario da funcao em si
});






router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});



router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router; 