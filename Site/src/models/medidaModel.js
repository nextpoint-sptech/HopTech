var database = require("../database/config");

function buscarUltimasMedidas(identificacoes, limite_linhas) {

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
        instrucaoSql = `select 
        hrCaptura, 
        luminosidade 
        from capturaLuminosidade where fkSensor = ${identificacoes.sensor} and fkPlantacao = ${identificacoes.plantacao} and fkEmpresa = ${identificacoes.empresa} and dtCaptura = current_date order by idCaptura desc limit ${limite_linhas}`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(identificacoes) {

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
        instrucaoSql = `select  
        hrCaptura, 
        luminosidade 
        from capturaLuminosidade 
        where fkSensor = ${identificacoes.sensor} and fkPlantacao = ${identificacoes.plantacao} and fkEmpresa = ${identificacoes.empresa} and dtCaptura = current_date order by idCaptura desc limit 1`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEmpresas(){
    console.log('estou no medida model, funcao buscarEmpresas')
    var instrucao = `select idEmpresa, nome from empresa order by idEmpresa;`
    console.log('Executando a instrucao SQL:', instrucao)
    return database.executar(instrucao)
}

function buscarLupulo(){
    console.log('estou no medida model, funcao buscarlupulo');
    var instrucao = `select tipoLupulo from lupulo`
    return database.executar(instrucao)
}

function buscarMetricasCadastro(mes){
    console.log('Estou buscando as metricas de cadastros por mes')
    var instrucao = `select count(idSensor) as sensorMes, ${mes-1} as 'mes', count(distinct(idEmpresa)) as empresaMes, count(distinct concat(plantacao.idPlantacao, plantacao.fkEmpresa)) as plantacaoMes from sensor join plantacao on sensor.fkPlantacao = plantacao.idPlantacao join empresa on plantacao.fkEmpresa = empresa.idEmpresa where empresa.mesCadastrado = ${mes} and plantacao.mesCadastrado = ${mes}`
    return database.executar(instrucao)
}

function buscarQtTotal(){
    console.log('estou no medidamodel, na funcao buscarqttotal');
    var instrucao = `select count(distinct(idEmpresa)) as empresasTotal, 
    count(distinct concat(plantacao.idPlantacao, plantacao.fkEmpresa)) as plantacoesTotal , 
    count(distinct concat (sensor.idSensor, sensor.fkPlantacao, sensor.fkEmpresa)) as sensoresTotal 
    from empresa left join plantacao on plantacao.fkEmpresa = empresa.idEmpresa left join sensor on sensor.fkPlantacao = plantacao.idPlantacao`
    return database.executar(instrucao)
}

function cadastrarPlantacao(plantacao){
    var instrucao = `
    insert into plantacao values 
    (fn_qtdPlantacao((select idEmpresa from empresa where nome = '${plantacao.empresa}')),
    '${plantacao.tpIluminacao}',
    ${plantacao.metros},
    '${plantacao.regiao}',
    '${plantacao.estado}',
    '${plantacao.cidade}',
    (select idLupulo from lupulo where tipoLupulo = '${plantacao.tpLupulo}'),
    (select idEmpresa from empresa where nome = '${plantacao.empresa}'),
    5);`
    console.log('Executando instrucao SQL: ' + instrucao)
    
    var instrucao2 = `
    insert into sensor values 
    (1, 'LDR5 - Luminosidade', 'Ativo', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1), (select idEmpresa from empresa where nome = '${plantacao.empresa}'), 'Norte'),
    (2, 'LDR5 - Luminosidade', 'Ativo', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1), (select idEmpresa from empresa where nome = '${plantacao.empresa}'), 'Nordeste'),
    (3, 'LDR5 - Luminosidade', 'Ativo', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1),(select idEmpresa from empresa where nome = '${plantacao.empresa}'), 'Centro-Oeste'),
    (4, 'LDR5 - Luminosidade', 'Ativo', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1),(select idEmpresa from empresa where nome = '${plantacao.empresa}'), 'Sudeste'),
    (5, 'LDR5 - Luminosidade', 'Ativo', (select idPlantacao from plantacao where fkEmpresa = (select idEmpresa from empresa where nome = '${plantacao.empresa}') order by idPlantacao desc limit 1),(select idEmpresa from empresa where nome = '${plantacao.empresa}'), 'Sul')
    ;`
    return database.executar(instrucao), database.executar(instrucao2)
}

function listarHistoricoAlertas(idEmpresa, permPlantacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao
    if(permPlantacao == 'null'){
        instrucao = `
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
            join empresa on idEmpresa = capturaluminosidade.fkEmpresa
            where (luminosidade <= 600 or luminosidade >= 700)
                and idEmpresa = ${idEmpresa}
            order by dtCaptura desc limit 100;
        `;
    }else{
        instrucao = `
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
            join empresa on idEmpresa = capturaluminosidade.fkEmpresa
            where (luminosidade <= 600 or luminosidade >= 700)
                and idEmpresa = ${idEmpresa} and idPlantacao = ${permPlantacao}
            order by dtCaptura desc limit 100;
        `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarPlantacoes(idEmpresa){
    var instrucao = `select idPlantacao from plantacao where fkEmpresa = ${idEmpresa}`
    return database.executar(instrucao)
}

function obterMediaTotal(fkEmpresa, permPlantacao){
    var instrucao
    if(permPlantacao == 'null'){
        instrucao = `select hrCaptura, round(avg(luminosidade), 2) as luminosidade from capturaLuminosidade
        join sensor on capturaLuminosidade.fkSensor = sensor.idSensor 
        join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
        where plantacao.fkEmpresa = ${fkEmpresa} and dtCaptura = current_date
        group by hrCaptura limit 15`
    }else{
        instrucao = `select hrCaptura, round(avg(luminosidade), 2) as luminosidade from capturaLuminosidade
        join sensor on capturaLuminosidade.fkSensor = sensor.idSensor 
        join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
        where plantacao.fkEmpresa = ${fkEmpresa} and capturaluminosidade.fkPlantacao = ${permPlantacao} and dtCaptura = current_date
        group by hrCaptura limit 15`
    }
    return database.executar(instrucao)
}

function obterMediaTempoReal(fkEmpresa, permPlantacao){
    var instrucao
    if(permPlantacao == 'null'){
        instrucao = `select hrCaptura, round(avg(luminosidade), 2) as luminosidade from capturaLuminosidade
        join sensor on capturaLuminosidade.fkSensor = sensor.idSensor 
        join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
        where plantacao.fkEmpresa = ${fkEmpresa} and dtCaptura = current_date
        group by hrCaptura order by hrCaptura desc limit 1`
    }else{
        instrucao = `select hrCaptura, round(avg(luminosidade), 2) as luminosidade from capturaLuminosidade
        join sensor on capturaLuminosidade.fkSensor = sensor.idSensor 
        join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
        where plantacao.fkEmpresa = ${fkEmpresa} and capturaluminosidade.fkPlantacao = ${permPlantacao} and dtCaptura = current_date
        group by hrCaptura order by hrCaptura desc limit 1`
    }
    return database.executar(instrucao)

}

function listarAlertasDashPrincipal(idEmpresa, permPlantacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao
    if(permPlantacao == 'null'){
        instrucao = `
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
            join empresa on empresa.idEmpresa = plantacao.fkEmpresa
            where (luminosidade <= 600 or luminosidade >= 700)
                and idEmpresa = ${idEmpresa}
            order by dtCaptura desc, hrCaptura desc
            limit 3;`;
    }else{
        instrucao = `
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
            join empresa on empresa.idEmpresa = plantacao.fkEmpresa
            where (luminosidade <= 600 or luminosidade >= 700)
                and idEmpresa = ${idEmpresa} and idPlantacao = ${permPlantacao}
            order by dtCaptura desc, hrCaptura desc
            limit 3;`;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarPlantacaoDestaque(idEmpresa){
    var instrucao = `
        SELECT p.idPlantacao
        FROM plantacao AS p
        JOIN capturaLuminosidade AS c ON c.fkPlantacao = p.idPlantacao AND c.fkEmpresa = p.fkEmpresa
        WHERE p.fkEmpresa = ${idEmpresa}
        AND (c.luminosidade <= 600 OR c.luminosidade >= 700)
        GROUP BY p.idPlantacao
        ORDER BY COUNT(c.idCaptura) ASC
        LIMIT 1;
    `;
    
    return database.executar(instrucao)
}

function buscarPlantacaoAtencao(idEmpresa){
    var instrucao = `
        SELECT p.idPlantacao
        FROM plantacao AS p
        JOIN capturaLuminosidade AS c ON c.fkPlantacao = p.idPlantacao AND c.fkEmpresa = p.fkEmpresa
        WHERE p.fkEmpresa = ${idEmpresa}
        AND (c.luminosidade <= 600 OR c.luminosidade >= 700)
        GROUP BY p.idPlantacao
        ORDER BY COUNT(c.idCaptura) DESC
        LIMIT 1;
    `;
    
    return database.executar(instrucao)
}

function buscarRegiaoDestaque(idEmpresa, idPlantacao){
    var instrucao = `
        SELECT s.regiao,
            COUNT(cl.idCaptura)
        FROM sensor AS s
        JOIN capturaLuminosidade AS cl ON cl.fkSensor = s.idSensor 
            and cl.fkPlantacao = s.fkPlantacao and cl.fkEmpresa = s.fkEmpresa
        WHERE cl.fkEmpresa = ${idEmpresa} AND cl.fkPlantacao = ${idPlantacao}
        AND (cl.luminosidade <= 600 OR cl.luminosidade >= 700)
        GROUP BY s.regiao
        ORDER BY COUNT(cl.idCaptura) ASC
        LIMIT 1;
    `;
    
    return database.executar(instrucao)
}

function buscarRegiaoAtencao(idEmpresa, idPlantacao){
    var instrucao = `
        SELECT s.regiao,
            COUNT(cl.idCaptura)
        FROM sensor AS s
        JOIN capturaLuminosidade AS cl ON cl.fkSensor = s.idSensor 
            and cl.fkPlantacao = s.fkPlantacao and cl.fkEmpresa = s.fkEmpresa
        WHERE cl.fkEmpresa = ${idEmpresa} AND cl.fkPlantacao = ${idPlantacao}
        AND (cl.luminosidade <= 600 OR cl.luminosidade >= 700)
        GROUP BY s.regiao
        ORDER BY COUNT(cl.idCaptura) DESC
        LIMIT 1;
    `;
    
    return database.executar(instrucao)
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
    buscarPlantacaoAtencao ,
    buscarRegiaoDestaque,
    buscarRegiaoAtencao
}
