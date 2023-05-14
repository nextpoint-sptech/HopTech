var empresaModel = require("../models/empresaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    empresaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cnpj = req.body.cnpjServer;
    var emailEmpresa = req.body.emailEmpresaServer;
    var cepEmpresa = req.body.cepEmpresaServer;
    var estadoEmpresa = req.body.estadoEmpresaServer;
    var cidadeEmpresa = req.body.cidadeEmpresaServer;
    var bairroEmpresa = req.body.bairroEmpresaServer;
    var ruaEmpresa = req.body.ruaEmpresaServer;
    var numeroEmpresa = req.body.numeroEmpresaServer;
    var complementoEmpresa = req.body.complementoEmpresaServer;


    // Faça as validações dos valores
    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (emailEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cepEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (estadoEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cidadeEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (bairroEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (ruaEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (numeroEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (complementoEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrar(nomeEmpresa, cnpj, emailEmpresa, cepEmpresa, estadoEmpresa, cidadeEmpresa, bairroEmpresa, ruaEmpresa, numeroEmpresa, complementoEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar
}