var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idSensor}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dtCaptura, 
        hrCaptura, 
        luminosidade 
        from capturaLuminosidade where fkSensor = ${idSensor} order by fkSensor desc limit ${limite_linhas}`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSensor} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dtCaptura, 
        hrCaptura, 
        luminosidade 
        from capturaLuminosidade 
        where fkSensor = ${idSensor} order by idCaptura desc limit 1`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEmpresas(){
    console.log('estou no medida model, funcao buscarEmpresas')
    var instrucao = `select nome from empresa;`
    console.log('Executando a instrucao SQL:', instrucao)
    return database.executar(instrucao)
}

function cadastrarPlantacao(plantacao){
    var instrucao = `insert into plantacao values (null, '${plantacao.tpIluminacao}', '${plantacao.metros}', '${plantacao.regiao}', '${plantacao.estado}', '${plantacao.cidade}', (select idLupulo from lupulo where tipoLupulo = '${plantacao.tpLupulo}'), (select idEmpresa from empresa where nome = '${plantacao.empresa}'), ${plantacao.mesCadastro});`
    
    var instrucao2 = `insert into sensor values 
    (null, 'LDR5 - Luminosidade', 'Ativo', 'Norte', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idEmpresa desc limit 1)),
    (null, 'LDR5 - Luminosidade', 'Ativo', 'Nordeste', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idEmpresa desc limit 1)),
    (null, 'LDR5 - Luminosidade', 'Ativo', 'Centro-Oeste', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idEmpresa desc limit 1)),
    (null, 'LDR5 - Luminosidade', 'Ativo', 'Sudeste', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idEmpresa desc limit 1)),
    (null, 'LDR5 - Luminosidade', 'Ativo', 'Sul', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idEmpresa desc limit 1))
    ;`
    return database.executar(instrucao), database.executar(instrucao2)
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEmpresas,
    cadastrarPlantacao
}
