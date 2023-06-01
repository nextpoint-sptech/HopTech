var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})

router.post('/cadastrarFuncionario', function(req, res){
    usuarioController.cadastrarFuncionario(req, res)
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get('/puxarFuncionarios/:fkEmpresa', function(req, res){
    usuarioController.puxarFuncionarios(req,res);
})

router.post('/excluirUsuario', function(req, res){
    usuarioController.excluirUsuario(req, res)
})

router.post('/editarUsuario', function(req, res){
    usuarioController.editarUsuario(req, res)
})

module.exports = router;