var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
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

function entrar(req, res) {
    var credenciais = req.body.credenciaisJSON;

    if (credenciais.usuario == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else if (credenciais.senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(credenciais)
        .then(function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
            if (resultado.length == 1) {
                console.log(resultado);
                res.json(resultado[0]);
            } else if (resultado.length == 0) {
                res.status(403).send("usuario e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

}

function cadastrarEmpresa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var empresa = req.body.empresaJSON;
    console.log(empresa)

    // Faça as validações dos valores
    for(let object of Object.keys(empresa)){
        if(empresa[object] == undefined){
            res.status(400).send(`${object} está undefined!`)
            return false
        }
    }

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarEmpresa(empresa)
    .then(function (resultado) {
        console.log('Then do usuarioCONTROLLER: ' + resultado)
        res.json(resultado);
    }).catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarFuncionario(req, res){
    var funcionario = req.body.funcionarioJSON;

    for(object of Object.keys(funcionario)){
        if(funcionario[object] == undefined){
            res.status(400).send(`${object} está undefined!`)
            return false
        }
    }
    usuarioModel.cadastrarFuncionario(funcionario).then(function (resultado) {
        console.log('Then do usuarioCONTROLLER: ' + resultado)
        res.json(resultado);
    }).catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function puxarFuncionarios(req, res){
    var empresa = req.params.fkEmpresa;
    if(empresa == undefined){
        res.status(400).send('empresa está undefined');
        return false
    }
    usuarioModel.puxarFuncionarios(empresa).then(function (resultado) {
        console.log('Then do usuarioCONTROLLER: ' + resultado)
        res.json(resultado);
    }).catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function excluirUsuario(req, res){
    var usuario = req.body.usuarioJSON;
    usuarioModel.excluirUsuario(usuario).then(function (resultado) {
        console.log('Then do usuarioCONTROLLER: ' + resultado)
        res.json(resultado);
    }).catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

function editarUsuario(req, res){
    var mudancas = req.body.mudancasJSON;
    usuarioModel.editarUsuario(mudancas).then(function (resultado) {
        console.log('Then do usuarioCONTROLLER: ' + resultado)
        res.json(resultado);
    }).catch(function (erro) {
            console.log(erro);
            console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    entrar,
    cadastrarEmpresa,
    cadastrarFuncionario,
    listar,
    testar,
    puxarFuncionarios,
    excluirUsuario,
    editarUsuario
}