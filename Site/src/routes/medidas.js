var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/buscarEmpresas", function(req, res){
    medidaController.buscarEmpresas(req, res)
})

router.post('/cadastroPlantacao', function(req, res){
    medidaController.cadastrarPlantacao(req, res)
})

module.exports = router;