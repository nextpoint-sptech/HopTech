use hop_tech;

-- Inserção de dados mocados
insert into empresa values
	(null, 'HopTech', 'xx.xxx.xxx/xxxx-xx', 'atendimentohoptech@gmail.com', 'xxxxx-xxx', 'SP', 'São Paulo', 'Consolação', 'Rua Haddock Lobo', '595', null, 3),
	(null, 'LupAgro', '70.357.617/0001-44', 'lupagro@outlook.com.br', '96090-710', 'RS', 'Pelotas', 'Laranjal', 'Rua São Lourenço do Sul', '810', 'Area rural, ao lado de uma plantação de lupulo.', 5),
    (null, 'Lupulo Ltda', '59.484.892/0001-96', 'lupuloltda@outlook.com.br', '69023-490', 'AM', 'Manaus', 'Tarumã-Açu', 'Ramal do Mariano', '1498', null, 5),
    (null, 'LAL Agro Malte ', '89.422.803/0001-48', 'lal@outlook.com.br', '78065-150',  'MT', 'Cuiabá','Jardim Tropical', 'Rua Varsóvia', '222', null, 5);
    
insert into telefone_empresa values
	(null, '(53) 2814-7384', null, 1),
    (null, '(53) 99374-9980', null, 1),
    (null, '(92) 3876-9475', 'Fixo', 2),
    (null, '(65) 3578-5674', 'Fixo', 3);
    
insert into usuario values
	(null, 0, null, null, 'hoppers', '123', 1),
    (null, 1, null, null, 'LupAgroAdmin', '4321', 1),
    (null, 1, null, null, 'LupuloLtdaAdmin', '5678', 2),
    (null, 1, null, null, 'LalAdmin', '0987', 3);    
    
insert into lupulo values
	(null, 'Admiral', 15),
    (null, 'Ahtanum', 15),
    (null, 'Amarillo', 15);
    
insert into plantacao values
	(null, 'Natural', 1000, 'Sul', 'RS', 'Pelotas', 2, 1, 5),
    (null, 'Natural', 10000, 'Norte', 'AM', 'Manaus', 1, 2, 5),
    (null, 'artificial', 5500, 'Centro-Oeste', 'MT', 'Cuiabá', 3, 3, 5);
    
insert into sensor values
	(null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Norte'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Nordeste'),
    (null, 'LDR5 - Luminosidade', 'Em manutenção', 1, 'Centro-Oeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Suldeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 1, 'Sul'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Norte'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Nordeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Centro-Oeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Suldeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 2, 'Sul'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Norte'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Nordeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Centro-Oeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Suldeste'),
    (null, 'LDR5 - Luminosidade', 'Ativo', 3, 'Sul');
    
insert into capturaLuminosidade values
	(null, '2023-04-01', '10:00:00', 350, 1),
    (null, '2023-04-01', '10:00:00', 350, 2),
    (null, '2023-04-01', '10:00:00', 520, 3),
    (null, '2023-04-01', '10:00:00', 550, 4),
    (null, '2023-04-01', '10:00:00', 550, 5),
    (null, '2023-04-01', '10:00:00', 575, 6),
    (null, '2023-04-01', '10:00:00', 578, 7),
    (null, '2023-04-01', '10:00:00', 645, 8),
    (null, '2023-04-01', '10:00:00', 576, 9),
    (null, '2023-04-01', '10:00:00', 574, 10),
    (null, '2023-04-01', '10:00:00', 700, 11),
    (null, '2023-04-01', '10:00:00', 701, 12),
    (null, '2023-04-01', '10:00:00', 659, 13),
    (null, '2023-04-01', '10:00:00', 500, 14),
    (null, '2023-04-01', '10:00:00', 505, 15),
    (null, '2023-04-01', '10:30:00', 467, 1),
    (null, '2023-04-01', '10:30:00', 128, 2),
    (null, '2023-04-01', '10:30:00', 520, 3),
    (null, '2023-04-01', '10:30:00', 550, 4),
    (null, '2023-04-01', '10:30:00', 550, 5),
    (null, '2023-04-01', '10:30:00', 575, 6),
    (null, '2023-04-01', '10:30:00', 578, 7),
    (null, '2023-04-01', '10:30:00', 645, 8),
    (null, '2023-04-01', '10:30:00', 572, 9),
    (null, '2023-04-01', '10:30:00', 570, 10),
    (null, '2023-04-01', '10:30:00', 705, 11),
    (null, '2023-04-01', '10:30:00', 702, 12),
    (null, '2023-04-01', '10:30:00', 659, 13),
    (null, '2023-04-01', '10:30:00', 479, 14),
    (null, '2023-04-01', '10:30:00', 505, 15);

-- Consulta de dados
select * from empresa;
select * from telefone_empresa;
select * from usuario;
select * from lupulo;
select * from sensor;
select * from plantacao;
select * from capturaLuminosidade;
select * from permissoes;

select date_format(capturaLuminosidade.dtCaptura, '%d/%m/%Y')  as 'Data',
	capturaLuminosidade.hrCaptura as Hora,
	capturaLuminosidade.luminosidade as 'Luminosidade Recebida',
	sensor.regiaoPlantacao as 'Região da Plantação',
	lupulo.tipoLupulo as 'Lupulo',
	empresa.nomeEmpresa as 'Empresa Responsável'
from capturaLuminosidade
join sensor on idSensor = fkSensor
join plantacao on idPlantacao = fkPlantacao
join lupulo on idLupulo = fkLupulo
join empresa on idEmpresa = fkEmpresa
where luminosidade < 500
order by luminosidade;

select hrCaptura, luminosidade from capturaLuminosidade;

-- Média de luminosidade de uma determinada plantação do dia específico
select hrCaptura, 
	round(avg(luminosidade), 2) as media_luminosidade
from capturaLuminosidade
join sensor on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where idPlantacao = 1 and fkEmpresa = 1 and dtCaptura = current_date()
group by hrCaptura;

-- Média de luminosidade de todas as plantações de uma determinada empresa do dia específico
select hrCaptura, 
	round(avg(luminosidade), 2) as media_luminosidade
from capturaLuminosidade
join sensor on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where fkEmpresa = 1 and dtCaptura = current_date()
group by hrCaptura;

-- Média de luminosidade por região de todas plantação do dia específico
select sensor.regiaoPlantacao,
	round(avg(luminosidade), 2) as media_luminosidade
from sensor 
join capturaLuminosidade on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where fkEmpresa = 1 and dtCaptura = current_date()
group by sensor.regiaoPlantacao;

-- Média de luminosidade por região de uma determinada plantação do dia específico
select sensor.regiaoPlantacao,
	round(avg(luminosidade), 2) as media_luminosidade
from sensor 
join capturaLuminosidade on capturaLuminosidade.fkSensor = sensor.idSensor
join plantacao on sensor.fkPlantacao = plantacao.idPlantacao
where idPlantacao = 1 and fkEmpresa = 1 and dtCaptura = current_date()
group by sensor.regiaoPlantacao;


