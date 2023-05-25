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
        SELECT  usuario.*, empresa.nome FROM usuario JOIN empresa ON fkEmpresa = idEmpresa WHERE usuario.usuario = '${credenciais.usuario}' AND usuario.senha = '${credenciais.senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", empresa.usuario, empresa.senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO empresa VALUES (null, '${empresa.nome}', '${empresa.cnpj}', '${empresa.email}', '${empresa.cep}', '${empresa.estado}', '${empresa.cidade}', '${empresa.bairro}', '${empresa.rua}',${empresa.numero}, '${empresa.complemento}', ${empresa.mesCadastrado});`

    var instrucao2 = `INSERT INTO usuario VALUES (null, 1,'${empresa.nome}', '${empresa.email}','${empresa.usuario}', '${empresa.senha}', (select idEmpresa from empresa where nome = '${empresa.nome}'));`;
    
    var instrucao3 = `INSERT INTO telefone VALUES (null, '${empresa.telefone}', '${empresa.tpTelefone}', (select idEmpresa from empresa where nome = '${empresa.nome}'))`
    console.log("Executando a instrução SQL: \n" + instrucao);
    console.log("Executando a instrução SQL: \n" + instrucao2);
    console.log("Executando a instrução SQL: \n" + instrucao3);
    database.executar(instrucao)
    setTimeout(
        ()=>{
            return database.executar(instrucao2), database.executar(instrucao3);
        }, 500
    )
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};