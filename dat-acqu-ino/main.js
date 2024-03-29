// não altere!
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');
const sql = require('mssql');

// não altere!
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// configure a linha abaixo caso queira que os dados capturados sejam inseridos no banco de dados.
// false -> nao insere
// true -> insere
const HABILITAR_OPERACAO_INSERIR = true;

// altere o valor da variável AMBIENTE para o valor desejado:
// API conectada ao banco de dados remoto, SQL Server -> 'producao'
// API conectada ao banco de dados local, MySQL Workbench - 'desenvolvimento'
const AMBIENTE = 'desenvolvimento';

const serial = async (
    valoresDht11Umidade,
    valoresDht11Temperatura,
    valoresLuminosidade,
    valoresLm35Temperatura,
    valoresChave
) => {
    let poolBancoDados = ''

    if (AMBIENTE == 'desenvolvimento') {
        poolBancoDados = mysql.createPool(
            {
                // altere!
                // CREDENCIAIS DO BANCO LOCAL - MYSQL WORKBENCH
                host: '10.18.36.85',
                user: 'admin_hop_tech',
                password: '1234',
                database: 'hop_tech'
            }
        ).promise();
    } else if (AMBIENTE == 'producao') {
        console.log('Projeto rodando inserindo dados em nuvem. Configure as credenciais abaixo.');
    } else {
        throw new Error('Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.');
    }


    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );``
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        //console.log(data);
        const valores = data.split(';'); 
        const luminosidade = parseFloat(valores[0]);
        const dht11Temperatura = parseFloat(valores[1]);
        const lm35Temperatura = parseFloat(valores[2]);
        const dht11Umidade = parseFloat(valores[3]);
        const chave = parseInt(valores[4]);
        console.log(`chave ${chave}`)

        valoresDht11Umidade.push(luminosidade);
        valoresDht11Temperatura.push(dht11Temperatura);
        valoresLuminosidade.push(dht11Umidade);
        valoresLm35Temperatura.push(lm35Temperatura);
        valoresChave.push(chave);

        if (HABILITAR_OPERACAO_INSERIR) {
            if (AMBIENTE == 'producao') {
                // altere!
                // Este insert irá inserir os dados na tabela "medida"
                // -> altere nome da tabela e colunas se necessário
                // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
                // >> Importante! você deve ter o aquario de id 1 cadastrado.
                sqlquery = `INSERT INTO medida (dht11_umidade, dht11_temperatura, luminosidade, lm35_temperatura, chave, momento, fk_aquario) VALUES (${dht11Umidade}, ${dht11Temperatura}, ${luminosidade}, ${lm35Temperatura}, ${chave}, CURRENT_TIMESTAMP, 1)`;

                // CREDENCIAIS DO BANCO REMOTO - SQL SERVER
                // Importante! você deve ter criado o usuário abaixo com os comandos presentes no arquivo
                // "script-criacao-usuario-sqlserver.sql", presente neste diretório.
                const connStr = "Server=servidor-acquatec.database.windows.net;Database=bd-acquatec;User Id=usuarioParaAPIArduino_datawriter;Password=#Gf_senhaParaAPI;";

                function inserirComando(conn, sqlquery) {
                    conn.query(sqlquery);
                    console.log("valores inseridos no banco: ", dht11Umidade + ", " + dht11Temperatura + ", " + luminosidade + ", " + lm35Temperatura + ", " + chave)
                }

                sql.connect(connStr)
                    .then(conn => inserirComando(conn, sqlquery))
                    .catch(err => console.log("erro! " + err));

            } else if (AMBIENTE == 'desenvolvimento') {
                var plantacao = 1 // identificação da plantação
                var empresa = 2 // identificação da empresa
                // Esses identificadores mudam de acordo com a empresa que contrata e plantação que está sendo inserido, de maneira manual,
                // na instalação de software e sensores dentro da plantação.

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 1, ?, ?)",
                    [dht11Umidade, plantacao, empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 2, ?, ?)",
                    [dht11Temperatura, plantacao, empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 3, ?, ?)",
                    [lm35Temperatura, plantacao, empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 4, ?, ?)",
                    [luminosidade, plantacao, empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 5, ?, ?)",
                    [chave, plantacao, empresa]
                );
                ///////////////////////////////////////////////////////////////////////////////

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 5, 2, ?)",
                    [dht11Umidade, empresa]
                );

                
                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 4, 2, ?)",
                    [dht11Temperatura, empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 3, 2, ?)",
                    [lm35Temperatura, empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 2, 2, ?)",
                    [luminosidade,  empresa]
                );

                await poolBancoDados.execute(
                    "INSERT INTO capturaLuminosidade (dtCaptura, hrCaptura, luminosidade, fkSensor, fkPlantacao, fkEmpresa) VALUES (curdate(), curtime(), ?, 1, 2, ?)",
                    [chave, empresa]
                );

                

            } else {
                throw new Error('Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.');
            }
        }
    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}


// não altere!
const servidor = (
    valoresDht11Umidade,
    valoresDht11Temperatura,
    valoresLuminosidade,
    valoresLm35Temperatura,
    valoresChave
) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/luminosidade', (_, response) => {
        return response.json(valoresDht11Umidade);
    });
    app.get('/sensores/luminosidade2', (_, response) => {
        return response.json(valoresDht11Temperatura);
    });
    app.get('/sensores/luminosidade3', (_, response) => {
        return response.json(valoresLuminosidade);
    });
    app.get('/sensores/luminosidade4', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    app.get('/sensores/luminosidade5', (_, response) => {
        return response.json(valoresChave);
    });
}

(async () => {
    const valoresDht11Umidade = [];
    const valoresDht11Temperatura = [];
    const valoresLuminosidade = [];
    const valoresLm35Temperatura = [];
    const valoresChave = [];
    await serial(
        valoresDht11Umidade,
        valoresDht11Temperatura,
        valoresLuminosidade,
        valoresLm35Temperatura,
        valoresChave
    );
    servidor(
        valoresDht11Umidade,
        valoresDht11Temperatura,
        valoresLuminosidade,
        valoresLm35Temperatura,
        valoresChave
    );
})();
