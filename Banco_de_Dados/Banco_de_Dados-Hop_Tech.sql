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
    telefone varchar(15),
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
    qtdIdealLumens float not null,
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