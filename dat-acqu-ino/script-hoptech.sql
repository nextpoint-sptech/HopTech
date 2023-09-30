create database hop_tech;
use hop_tech;

create table empresa_cliente(
	idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(50) not null,
    cnpj char(18) not null,
    emailEmpresa varchar(100) not null,
    estadoEmpresa varchar(50) not null,
    cidadeEmpresa varchar(50) not null,
    cepEmpresa char(9) not null,
    bairroEmpresa varchar(50) not null,
    ruaEmpresa varchar(50) not null,
    numeroEmpresa int not null,
    complementoEmpresa varchar(100),
    responsavelEmpresa varchar(50) not null
);

create table telefone_empresa(
	idTelefone int primary key auto_increment,
    telefone varchar(15) not null,
    fkEmpresa int, foreign key (fkEmpresa) references empresa_cliente(idEmpresa)
);

create table usuario(
	idUsuario int primary key auto_increment,
    tipoUsuario int, constraint chkTpUsuario check (tipoUsuario in (0, 1)),
    usuario varchar(45) not null,
    senha varchar(45) not null,
    fkEmpresa int, foreign key(fkEmpresa) references empresa_cliente(idEmpresa)
);

create table lupulo(
	idLupulo int primary key auto_increment,
    tipoLupulo varchar(45) not null,
    qtdHrsIdealLuz float
);

create table plantacao(
	idPlantacao int primary key auto_increment,
    tipoIluminacao varchar(45) not null, constraint chkTpIluminacao check (tipoIluminacao in('Natural', 'Artificial')),
    metroQuadradoPlantacao float not null,
    regiaoPlantacao varchar(45) not null,
    estadoPlantacao varchar(45) not null,
    cidadePlantacao varchar(45) not null,
    fkLupulo int not null, foreign key (fkLupulo) references lupulo(idLupulo),
    fkEmpresa int not null, foreign key (fkEmpresa) references empresa_cliente(idEmpresa)
);

create table sensor(
	idSensor int primary key auto_increment,
    tipoSensor varchar(45) not null, constraint chkTpSensor check (tipoSensor in('Luminosidade')),
    statusSensor varchar(45) not null, constraint chkStatusSensor check (statusSensor in('Ativo', 'Inativo', 'Em manutenção')),
    fkPlantacao int not null, foreign key (fkPlantacao) references plantacao(idPlantacao),
    regiaoSensor varchar(45), constraint chkRegiaoSensor check (regiaoSensor in ('Norte', 'Nordeste', 'Centro-Oeste', 'Suldeste', 'Sul'))
);

create table capturaLuminosidade(
	idCaptura int primary key auto_increment,
    dtCaptura date not null,
    hrCaptura time not null,
    luminosidade float not null,
    fkSensor int, foreign key (fkSensor) references sensor(idSensor)
);

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
	(null, 'Admiral', 15),
    (null, 'Ahtanum', 15),
    (null, 'Amarillo', 15);
    
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
select * from empresa_cliente;
select * from telefone_empresa;
select * from usuario;
select * from lupulo;
select * from sensor;
select * from plantacao;
select * from capturaLuminosidade;

select date_format(capturaLuminosidade.dtCaptura, '%d/%m/%Y')  as 'Data',
	capturaLuminosidade.hrCaptura as Hora,
	capturaLuminosidade.luminosidade as 'Luminosidade Recebida',
	sensor.regiaoSensor as 'Região da Plantação',
	lupulo.tipoLupulo as 'Lupulo',
	empresa_cliente.nomeEmpresa as 'Empresa Responsável'
from capturaLuminosidade 
join sensor on idSensor = fkSensor
join plantacao on idPlantacao = fkPlantacao
join lupulo on idLupulo = fkLupulo
join empresa_cliente on idEmpresa = fkEmpresa
where luminosidade < 500
order by luminosidade;