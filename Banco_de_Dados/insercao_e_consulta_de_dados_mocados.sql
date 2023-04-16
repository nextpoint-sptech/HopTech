use hop_tech;

-- Inserção de dados mocados
insert into empresa_cliente values 
	(null, 'LupAgro', '70.357.617/0001-44', 'lupagro@outlook.com.br', 'RS', 'Pelotas', '96090-710', 'Laranjal', 'Rua São Lourenço do Sul', '810', 'Area rural, ao lado de uma plantação de lupulo.', 'Igor Ferreira'),
    (null, 'Lupulo Ltda', '59.484.892/0001-96', 'lupuloltda@outlook.com.br', 'AM', 'Manaus', '69023-490', 'Tarumã-Açu', 'Ramal do Mariano', '1498', null, 'Ayla Teys'),
    (null, 'LAL Agro Malte ', '89.422.803/0001-48', 'lal@outlook.com.br', 'MT', 'Cuiabá', '78065-150', 'Jardim Tropical', 'Rua Varsóvia', '222', null, 'Alicia Nizis');
    
insert into telefone_empresa values
	(null, '(53) 2814-7384', 1),
    (null, '(53) 99374-9980', 1),
    (null, '(92) 3876-9475', 2),
    (null, '(65) 3578-5674', 3);
    
insert into usuario values
	(null, 0, 'hoppers', '123', null),
    (null, 1, 'LupAgroAdmin', '4321', 1),
    (null, 1, 'LupuloLtdaAdmin', '5678', 2),
    (null, 1, 'LalAdmin', '0987', 3);    
    
insert into lupulo values
	(null, 'Admiral', 500, 15),
    (null, 'Ahtanum', 500, 15),
    (null, 'Amarillo', 500, 15);
    
insert into plantacao values
	(null, 'Natural', 1000, 'Sul', 'RS', 'Pelotas', 2, 1),
    (null, 'Natural', 10000, 'Norte', 'AM', 'Manaus', 1, 2),
    (null, 'artificial', 5500, 'Centro-Oeste', 'MT', 'Cuiabá', 3, 3);
    
insert into sensor values
	(null, 'Luminosidade', 'Ativo', 1, 'Norte'),
    (null, 'Luminosidade', 'Ativo', 1, 'Nordeste'),
    (null, 'Luminosidade', 'Em manutenção', 1, 'Centro-Oeste'),
    (null, 'Luminosidade', 'Ativo', 1, 'Suldeste'),
    (null, 'Luminosidade', 'Ativo', 1, 'Sul'),
    (null, 'Luminosidade', 'Ativo', 2, 'Norte'),
    (null, 'Luminosidade', 'Ativo', 2, 'Nordeste'),
    (null, 'Luminosidade', 'Ativo', 2, 'Centro-Oeste'),
    (null, 'Luminosidade', 'Ativo', 2, 'Suldeste'),
    (null, 'Luminosidade', 'Ativo', 2, 'Sul'),
    (null, 'Luminosidade', 'Ativo', 3, 'Norte'),
    (null, 'Luminosidade', 'Ativo', 3, 'Nordeste'),
    (null, 'Luminosidade', 'Ativo', 3, 'Centro-Oeste'),
    (null, 'Luminosidade', 'Ativo', 3, 'Suldeste'),
    (null, 'Luminosidade', 'Ativo', 3, 'Sul');
    
insert into capturaLuminosidade values
	(null, '2023-04-01', '10:00:00', '350', 1),
    (null, '2023-04-01', '10:00:00', '350', 2),
    (null, '2023-04-01', '10:00:00', '520', 3),
    (null, '2023-04-01', '10:00:00', '550', 4),
    (null, '2023-04-01', '10:00:00', '550', 5),
    (null, '2023-04-01', '10:00:00', '575', 6),
    (null, '2023-04-01', '10:00:00', '578', 7),
    (null, '2023-04-01', '10:00:00', '645', 8),
    (null, '2023-04-01', '10:00:00', '576', 9),
    (null, '2023-04-01', '10:00:00', '574', 10),
    (null, '2023-04-01', '10:00:00', '700', 11),
    (null, '2023-04-01', '10:00:00', '701', 12),
    (null, '2023-04-01', '10:00:00', '659', 13),
    (null, '2023-04-01', '10:00:00', '500', 14),
    (null, '2023-04-01', '10:00:00', '505', 15);

-- Consulta de dados
select * from empresa_cliente;
select * from telefone_empresa;
select * from usuario;
select * from lupulo;
select * from sensor;
select * from plantacao;
select * from capturaLuminosidade;

