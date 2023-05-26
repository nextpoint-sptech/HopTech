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

function buscarMetricasCadastro(mes){
    console.log('Estou buscando as metricas de cadastros por mes')
    var instrucao = `select count(idSensor) as sensorMes${mes}, count(idEmpresa) as empresaMes${mes}, count(idPlantacao) as plantacaoMes${mes} from sensor join plantacao on sensor.fkPlantacao = plantacao.idPlantacao join empresa on plantacao.fkEmpresa = empresa.idEmpresa where empresa.mesCadastrado = ${mes} and plantacao.mesCadastrado = ${mes}`
    return database.executar(instrucao)
}

function cadastrarPlantacao(plantacao){
    var instrucao = `insert into plantacao values (null, '${plantacao.tpIluminacao}', '${plantacao.metros}', '${plantacao.regiao}', '${plantacao.estado}', '${plantacao.cidade}', (select idLupulo from lupulo where tipoLupulo = '${plantacao.tpLupulo}'), (select idEmpresa from empresa where nome = '${plantacao.empresa}'), ${plantacao.mesCadastro});`
    
    var instrucao2 = `
    insert into sensor values 
    (1, 'LDR5 - Luminosidade', 'Ativo', 'Norte', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1)),
    (2, 'LDR5 - Luminosidade', 'Ativo', 'Nordeste', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1)),
    (3, 'LDR5 - Luminosidade', 'Ativo', 'Centro-Oeste', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1)),
    (4, 'LDR5 - Luminosidade', 'Ativo', 'Sudeste', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1)),
    (5, 'LDR5 - Luminosidade', 'Ativo', 'Sul', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1))
    
    ;`
    return database.executar(instrucao), database.executar(instrucao2)
}

function listarHistoricoAlertas(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        select date_format(capturaLuminosidade.dtCaptura, '%d/%m/%Y')  as dtCaptura,
            capturaLuminosidade.hrCaptura,
            capturaLuminosidade.luminosidade,
            sensor.regiao,
            lupulo.tipoLupulo,
            plantacao.idPlantacao,
            empresa.idEmpresa
        from capturaLuminosidade
        join sensor on idSensor = fkSensor
        join plantacao on plantacao.idPlantacao = sensor.fkPlantacao
        join lupulo on idLupulo = fkLupulo
        join empresa on idEmpresa = fkEmpresa
        where (luminosidade <= 600 or luminosidade >= 700)
            and idEmpresa = ${idEmpresa}
        order by dtCaptura desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEmpresas,
    cadastrarPlantacao,
    listarHistoricoAlertas,
    buscarMetricasCadastro,
}
