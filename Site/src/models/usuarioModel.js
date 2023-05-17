var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(credenciais) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", credenciais.usuario, credenciais.senha)
    var instrucao = `
        SELECT * FROM usuario WHERE usuario = '${credenciais.usuario}' AND senha = '${credenciais.senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", empresa.usuario, empresa.senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO empresa_cliente VALUES (null, '${empresa.nome}', '${empresa.cnpj}', '${empresa.email}', '${empresa.cep}', '${empresa.estado}', '${empresa.cidade}', '${empresa.bairro}', '${empresa.rua}',${empresa.numero}, '${empresa.complemento}');`

    var instrucao2 = `INSERT INTO usuario VALUES (null,'${empresa.nome}', '${empresa.email}','${empresa.usuario}', '${empresa.senha}', (select idEmpresa from empresa_cliente where nomeEmpresa = '${empresa.nome}'));`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao), database.executar(instrucao2);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};