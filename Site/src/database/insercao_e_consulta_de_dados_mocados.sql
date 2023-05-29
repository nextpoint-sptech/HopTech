use hop_tech;

-- Inserção de dados mocados
insert into empresa values 
	(null, 'HopTech', 'xx.xxx.xxx/xxxx-xx', 'atendimentohoptech@gmail.com', '00000-000', 'SP', 'São Paulo', 'Paulista - Consolação', 'Rua Haddock Lobo', '595', null, 5),
	(null, 'LupAgro', '70.357.617/0001-44', 'lupagro@outlook.com.br', '96090-710', 'RS', 'Pelotas', 'Laranjal', 'Rua São Lourenço do Sul', '810', 'Area rural, ao lado de uma plantação de lupulo.', 5),
    (null, 'Lupulo Ltda', '59.484.892/0001-96', 'lupuloltda@outlook.com.br', '69023-490', 'AM', 'Manaus', 'Tarumã-Açu', 'Ramal do Mariano', '1498', null, 5),
    (null, 'LAL Agro Malte ', '89.422.803/0001-48', 'lal@outlook.com.br', '78065-150', 'MT', 'Cuiabá', 'Jardim Tropical', 'Rua Varsóvia', '222', null, 5);

/*
insert into telefone values
	(null, '(53) 2814-7384', 1),
    (null, '(53) 99374-9980', 1),
    (null, '(92) 3876-9475', 2),
    (null, '(65) 3578-5674', 3);
*/

insert into usuario values
	(null, 0, null, null, 'hoppers', '123', 1),
    (null, 1, null, null, 'LupAgroAdmin', '4321', 2),
    (null, 1, null, null, 'LupuloLtdaAdmin', '5678', 3),
    (null, 1, null, null, 'LalAdmin', '0987', 4);    
    
insert into lupulo values
	(null, 'Admiral', 15),
    (null, 'Ahtanum', 15),
    (null, 'Amarillo', 15);
    
insert into plantacao values
	(null, 'Natural', 1000, 'Sul', 'RS', 'Pelotas', 2, 2, 5),
    (null, 'Natural', 10000, 'Norte', 'AM', 'Manaus', 1, 3, 5),
    (null, 'artificial', 5500, 'Centro-Oeste', 'MT', 'Cuiabá', 3, 4, 5);
    
insert into sensor values
	(null, 'LDR5 - Luminosidade', 'Ativo', 1 , 'Norte'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Nordeste'),
    (null, 'LDR5 - Luminosidade', 'Em manutenção', 1, 'Centro-Oeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Sudeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Sul'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Norte'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Nordeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Centro-Oeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Sudeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Sul'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Norte'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Nordeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Centro-Oeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Sudeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Sul');
    
insert into capturaLuminosidade values
	(null, '2023-04-01', '10:00:00', 350, 1, 1),
    (null, '2023-04-01', '10:00:00', 350, 2, 1),
    (null, '2023-04-01', '10:00:00', 520, 3, 1),
    (null, '2023-04-01', '10:00:00', 550, 4, 1),
    (null, '2023-04-01', '10:00:00', 550, 5, 1),
    (null, '2023-04-01', '10:00:00', 575, 6, 1),
    (null, '2023-04-01', '10:00:00', 578, 7, 2),
    (null, '2023-04-01', '10:00:00', 645, 8, 2 ),
    (null, '2023-04-01', '10:00:00', 576, 9, 2),
    (null, '2023-04-01', '10:00:00', 574, 10, 2),
    (null, '2023-04-01', '10:00:00', 700, 11, 2),
    (null, '2023-04-01', '10:00:00', 701, 12, 2),
    (null, '2023-04-01', '10:00:00', 659, 13, 2),
    (null, '2023-04-01', '10:00:00', 500, 14, 2),
    (null, '2023-04-01', '10:00:00', 505, 15, 2),
    (null, '2023-04-01', '10:30:00', 467, 1, 3),
    (null, '2023-04-01', '10:30:00', 128, 2, 3),
    (null, '2023-04-01', '10:30:00', 520, 3, 3),
    (null, '2023-04-01', '10:30:00', 550, 4, 3),
    (null, '2023-04-01', '10:30:00', 550, 5, 3),
    (null, '2023-04-01', '10:30:00', 575, 6, 3),
    (null, '2023-04-01', '10:30:00', 578, 7, 3),
    (null, '2023-04-01', '10:30:00', 645, 8, 3),
    (null, '2023-04-01', '10:30:00', 572, 9, 3),
    (null, '2023-04-01', '10:30:00', 570, 10, 1),
    (null, '2023-04-01', '10:30:00', 705, 11, 1),
    (null, '2023-04-01', '10:30:00', 702, 12, 1),
    (null, '2023-04-01', '10:30:00', 659, 13, 1),
    (null, '2023-04-01', '10:30:00', 479, 14, 1),
    (null, '2023-04-01', '10:30:00', 505, 15, 1),
    (null, '2023-05-25', '10:30:00', 850, 1, 1),
    (null, '2023-05-25', '10:30:00', 960, 2, 1),
    (null, '2023-05-25', '10:30:00', 605, 3, 1),
    (null, '2023-05-25', '10:30:00', 985, 4, 1),
    (null, '2023-05-25', '10:30:00', 600, 5, 1);

-- Consulta de dados
select * from empresa;
select * from telefone;
select * from usuario;
select * from lupulo;
select * from sensor;
select * from plantacao;
select * from capturaLuminosidade;

select date_format(capturaLuminosidade.dtCaptura, '%d/%m/%Y')  as 'Data',
	capturaLuminosidade.hrCaptura as Hora,
	capturaLuminosidade.luminosidade as 'Luminosidade Recebida',
	sensor.regiao as 'Região da Plantação',
	lupulo.tipoLupulo as 'Lupulo',
	empresa.nome as 'Empresa Responsável'
from capturaLuminosidade 
join sensor on idSensor = fkSensor
join plantacao on idPlantacao = fkPlantacao
join lupulo on idLupulo = fkLupulo
join empresa on idEmpresa = fkEmpresa
where luminosidade < 500
order by luminosidade;

-- Média de luminosidade de uma determinada plantação do dia específico
select hrCaptura, 
	round(avg(luminosidade), 2) as media_luminosidade
from capturaLuminosidade
join sensor on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where idPlantacao = 1 and fkEmpresa = 2 and dtCaptura = current_date()
group by hrCaptura;

-- Média de luminosidade de todas as plantações de uma determinada empresa do dia específico
select hrCaptura, 
	round(avg(luminosidade), 2) as media_luminosidade
from capturaLuminosidade
join sensor on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where fkEmpresa = 2 and dtCaptura = current_date()
group by hrCaptura;

-- Média de luminosidade por região de todas plantação do dia específico
select sensor.regiao,
	round(avg(luminosidade), 2) as media_luminosidade
from sensor 
join capturaLuminosidade on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where fkEmpresa = 2 and dtCaptura = current_date()
group by sensor.regiao;

-- Média de luminosidade por região de uma determinada plantação do dia específico
select sensor.regiao,
	round(avg(luminosidade), 2) as media_luminosidade
from sensor 
join capturaLuminosidade on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where idPlantacao = 1 and fkEmpresa = 1 and dtCaptura = current_date()
group by sensor.regiao;

-- Alertas do histórico
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
	and idEmpresa = 2
order by dtCaptura desc;

-- alertas do dadhboard
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
	and idEmpresa = 2
order by dtCaptura desc limit 3;
