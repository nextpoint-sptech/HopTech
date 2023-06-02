var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;
    var identificacoes = {  
        sensor: req.params.idSensor,
        plantacao: req.params.fkPlantacao,
        empresa: req.params.fkEmpresa
    }

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(identificacoes, limite_linhas).then(function (resultado) {
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

function buscarMedidasEmTempoReal(req, res) {
    var identificacoes = {
        sensor: req.params.idSensor,
        plantacao: req.params.fkPlantacao,
        empresa: req.params.fkEmpresa
    }


    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(identificacoes)
    .then(function (resultado) {
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

function buscarEmpresas(req, res){
    medidaModel.buscarEmpresas()
    .then(function (resultado) {
        res.json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarLupulo(req, res){
    medidaModel.buscarLupulo()
    .then(function (resultado) {
        res.json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPlantacoes(req, res){
    var idEmpresa = req.params.idEmpresa;
    medidaModel.buscarPlantacoes(idEmpresa)
    .then(function (resultado) {
        res.json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarPlantacao(req, res){
    var plantacao = req.body.plantacao;
    for(let object of Object.keys(plantacao)){
        if(plantacao[object] == undefined){
            res.status(400).send(`${object} está undefined!`)
            return false
        }
    }
    medidaModel.cadastrarPlantacao(plantacao)
    .then(function (resultado) {
        res.json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMetricasCadastro(req, res){
    var mes = req.params.mes
    medidaModel.buscarMetricasCadastro(mes)
    .then(function (resultado) {
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

function listarHistoricoAlertas(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var permPlantacao = req.params.permPlantacao
    console.log("entrei no  medidaController no listarHistoricoAlertas");

    medidaModel.listarHistoricoAlertas(idEmpresa, permPlantacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarQtTotal(req, res){
    medidaModel.buscarQtTotal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterMediaTotal(req, res){
    var fkEmpresa = req.params.fkEmpresa;
    var permPlantacao = req.params.permPlantacao;
    medidaModel.obterMediaTotal(fkEmpresa, permPlantacao)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterMediaTempoReal(req, res){
    var fkEmpresa = req.params.fkEmpresa;
    var permPlantacao = req.params.permPlantacao;
    medidaModel.obterMediaTempoReal(fkEmpresa, permPlantacao)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarAlertasDashPrincipal(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var permPlantacao = req.params.permPlantacao;
    console.log("entrei no  medidaController no listarAlertasDashPrincipal");

    medidaModel.listarAlertasDashPrincipal(idEmpresa, permPlantacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPlantacaoDestaque(req, res) {
    var idEmpresa = req.params.idEmpresa;

    medidaModel.buscarPlantacaoDestaque(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPlantacaoAtencao(req, res) {
    var idEmpresa = req.params.idEmpresa;

    medidaModel.buscarPlantacaoAtencao(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegiaoDestaque(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var idPlantacao = req.params.idPlantacao;

    medidaModel.buscarRegiaoDestaque(idEmpresa, idPlantacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarRegiaoAtencao(req, res) {
    var idEmpresa = req.params.idEmpresa;
    var idPlantacao = req.params.idPlantacao;

    medidaModel.buscarRegiaoAtencao(idEmpresa, idPlantacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEmpresas,
    buscarLupulo,
    cadastrarPlantacao,
    listarHistoricoAlertas,
    buscarMetricasCadastro,
    buscarQtTotal,
    buscarPlantacoes,
    obterMediaTotal,
    obterMediaTempoReal,
    listarAlertasDashPrincipal,
    buscarPlantacaoDestaque,
    buscarPlantacaoAtencao,
    buscarRegiaoDestaque,
    buscarRegiaoAtencao
}