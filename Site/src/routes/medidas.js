var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor/:fkPlantacao/:fkEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor/:fkPlantacao/:fkEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/buscarEmpresas", function(req, res){
    medidaController.buscarEmpresas(req, res)
})

router.get("/buscarTpLupulo", function(req, res){
    medidaController.buscarLupulo(req, res)
})

router.post('/cadastroPlantacao', function(req, res){
    medidaController.cadastrarPlantacao(req, res)
})

router.get('/listarHistoricoAlertas/:idEmpresa', function(req, res){
    console.log("entrei no  medidas no listarHistoricoAlertas");
    medidaController.listarHistoricoAlertas(req, res)
})

router.get('/metricasCadastros/:mes', function(req, res){
    medidaController.buscarMetricasCadastro(req, res)
})

router.get('/buscarQtTotal', function(req, res){
    medidaController.buscarQtTotal(req, res)
})

router.get('/plantacoesPorEmpresa/:idEmpresa', function(req, res){
    medidaController.buscarPlantacoes(req, res)
})

router.get('/obterMedidaTotal/:fkEmpresa', function(req, res){
    medidaController.obterMediaTotal(req, res)
})

router.get('/obterMediaTempoReal/:fkEmpresa', function(req, res){
    medidaController.obterMediaTempoReal(req, res)
})

module.exports = router;