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
    SELECT  usuario.*, empresa.nome, permissoes.fkPlantacao as 'PlantacaoPermitida' FROM usuario 
    JOIN empresa ON usuario.fkEmpresa = idEmpresa left join permissoes on permissoes.fkUsuario = idUsuario WHERE usuario.usuario = '${credenciais.usuario}' AND usuario.senha = '${credenciais.senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
async function cadastrarEmpresa(empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa():", empresa.usuario, empresa.senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    const instrucao = `INSERT INTO empresa VALUES (null, '${empresa.nome}', '${empresa.cnpj}', '${empresa.email}', '${empresa.cep}', '${empresa.estado}', '${empresa.cidade}', '${empresa.bairro}', '${empresa.rua}',${empresa.numero}, '${empresa.complemento}', ${empresa.mesCadastrado});`

    const instrucao2 = `INSERT INTO usuario VALUES (null, 1,'${empresa.nome}', '${empresa.email}','${empresa.usuario}', '${empresa.senha}', (select idEmpresa from empresa where nome = '${empresa.nome}'));`;
    
    const instrucao3 = `INSERT INTO telefone VALUES (null, '${empresa.telefone}', '${empresa.tpTelefone}', (select idEmpresa from empresa where nome = '${empresa.nome}'))`
    try{
        console.log("Executando a instrução SQL: \n" + instrucao);
        await database.executar(instrucao);
        console.log("Executando a instrução SQL: \n" + instrucao2);
        await database.executar(instrucao2);
        console.log("Executando a instrução SQL: \n" + instrucao3);
        await database.executar(instrucao3);
        // ERRO:
        // em ocasioes onde os campos da empresa estão válidos, mas os de usuário não, ele continua cadastrando a empresa, porem, sem o usuario.
    }catch(error){
        throw error
    }
}

async function cadastrarFuncionario(funcionario){
    var instrucao = `insert into usuario values (null, 2, '${funcionario.nomeFuncionario}', '${funcionario.email}', '${funcionario.nomeUsuario}', '${funcionario.senha}', ${funcionario.fkEmpresa})`

    var instrucao2 = `insert into permissoes values(null, (select idUsuario from usuario where usuario = '${funcionario.nomeUsuario}'), ${funcionario.fkEmpresa}, ${funcionario.plantacao})`
    
    try{
        console.log('Executando a instrução SQL:' + instrucao);
        await database.executar(instrucao)
        console.log('Executando a instrução SQL:' + instrucao2);
        await database.executar(instrucao2)
    }catch(error){
        throw error
    }
}

function puxarFuncionarios(empresa){
    var instrucao = `select usuario.*, permissoes.idPermissao, permissoes.fkPlantacao from usuario join permissoes on permissoes.fkUsuario = idUsuario where usuario.fkEmpresa = ${empresa} and tpUsuario = 2`
    return database.executar(instrucao)
}

async function excluirUsuario(usuario){
    var instrucao = `delete from permissoes where idPermissao = ${usuario.idPermissao}`
    var instrucao2 = `delete from usuario where idUsuario = ${usuario.idUsuario}`
    try{
        await database.executar(instrucao)
        await database.executar(instrucao2)
    }catch(error){
        throw error
    }
}

function editarUsuario(mudancas){
    // permissao
    var instrucao = `update permissoes set fkPlantacao = ${mudancas.fkPlantacao} where idPermissao = ${mudancas.idPermissao}`
    console.log('acessei model editar usuario')
    var instrucao2 = `update usuario set usuario = '${mudancas.nomeNovo}' where idUsuario = (select idUsuario where usuario.usuario = '${mudancas.nomeAntigo}')`
    if(mudancas.nomeNovo != ''){
        return database.executar(instrucao), database.executar(instrucao2)
    }else{
        return database.executar(instrucao)
    }
}

module.exports = {
    entrar,
    cadastrarEmpresa,
    cadastrarFuncionario,
    listar,
    puxarFuncionarios,
    excluirUsuario,
    editarUsuario
};