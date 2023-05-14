var database = require("../../../Database/config")

function listar() {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa_cliente;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeEmpresa, cnpj, emailEmpresa, cepEmpresa, estadoEmpresa, cidadeEmpresa, bairroEmpresa, ruaEmpresa, complementoEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeEmpresa, cnpj, emailEmpresa, cepEmpresa, estadoEmpresa, cidadeEmpresa, bairroEmpresa, ruaEmpresa, complementoEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nomeEmpresa, cnpj, emailEmpresa, cepEmpresa, estadoEmpresa, cidadeEmpresa, bairroEmpresa, ruaEmpresa, complementoEmpresa) VALUES ('${nomeEmpresa}', ${cnpj}', '${emailEmpresa}', '${cepEmpresa}', '${estadoEmpresa}', '${cidadeEmpresa}', '${bairroEmpresa}', '${ruaEmpresa}', '${complementoEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
};