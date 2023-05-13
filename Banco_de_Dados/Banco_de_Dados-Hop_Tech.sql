create database hop_tech;
use hop_tech;

create table empresa_cliente(
	idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(50) not null,
    cnpj char(18) not null,
    emailEmpresa varchar(100) not null,
    cepEmpresa char(9) not null,
    estadoEmpresa char(2) not null,
    cidadeEmpresa varchar (25) not null,
    bairroEmpresa varchar(100) not null,
    ruaEmpresa varchar(100) not null,
    numeroEmpresa int not null,
    complementoEmpresa varchar(100)
);

create table telefone_empresa(
	idTelefone int primary key auto_increment,
    telefone varchar(15) not null,
    tpTelefone varchar(10) not null, constraint chTpTelefone check (tpTelefone in ('Celular', 'Fixo')),
    fkEmpresa int, foreign key (fkEmpresa) references empresa_cliente(idEmpresa)
);

create table usuario(
	idUsuario int primary key auto_increment,
    -- tipoUsuario int, constraint chkTpUsuario check (tipoUsuario in (0, 1)),
    nome varchar(100),
    email varchar(100),
    usuario varchar(45) not null,
    senha varchar(45) not null,
    fkEmpresa int not null, foreign key(fkEmpresa) references empresa_cliente(idEmpresa)
);

create table lupulo(
	idLupulo int primary key auto_increment,
    tipoLupulo varchar(50) not null,
    qtdHrsIdealLuz double not null
);

create table plantacao(
	idPlantacao int primary key auto_increment,
    tipoIluminacao varchar(45) not null, constraint chkTpIluminacao check (tipoIluminacao in('Natural', 'Artificial')),
    metroQuadradoPlantacao double not null,
    regiaoPlantacao varchar(15) not null,
    estadoPlantacao char(2) not null,
    cidadePlantacao varchar(25) not null,
    fkLupulo int not null, foreign key (fkLupulo) references lupulo(idLupulo),
    fkEmpresa int not null, foreign key (fkEmpresa) references empresa_cliente(idEmpresa)
);

create table regiao_plantacao(
	idRegiao int primary key auto_increment,
    regiao varchar(15) not null, constraint chkRegiao check (regiao in ('Norte', 'Nordeste', 'Centro-Oeste', 'Suldeste', 'Sul')),
    fkPlantacao int not null, foreign key(fkPlantacao) references plantacao(idPlantacao)
);

create table sensor(
	idSensor int primary key auto_increment,
    tipoSensor varchar(20) not null, constraint chkTpSensor check (tipoSensor in('LDR5 - Luminosidade')),
    statusSensor varchar(15) not null, constraint chkStatusSensor check (statusSensor in('Ativo', 'Inativo', 'Em manutenção')),
    fkRegiaoPlantacao int not null, foreign key (fkRegiaoPlantacao) references regiao_plantacao(idRegiao)
);

create table capturaLuminosidade(
	idCaptura int primary key auto_increment,
    dtCaptura date not null,
    hrCaptura time not null,
    luminosidade double not null,
    fkSensor int, foreign key (fkSensor) references sensor(idSensor)
);

create table permissoes(
	idPermissao int,
    tipoPermissao int,
    fkUsuario int not null, foreign key(fkUsuario) references usuario(idUsuario),
    fkPlantacao int not null, foreign key(fkPlantacao) references plantacao(idPlantacao),
    fkRegiaoPlantacao int not null, foreign key (fkRegiaoPlantacao) references regiao_plantacao(idRegiao)
);