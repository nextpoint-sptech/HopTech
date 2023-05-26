create database hop_tech;
use hop_tech;

create table empresa(
	idEmpresa int primary key auto_increment,
    nome varchar(50) not null unique,
    cnpj char(18) not null,
    email varchar(100) not null,
    cep char(9) not null,
    estado char(2) not null,
    cidade varchar (25) not null,
    bairro varchar(100) not null,
    rua varchar(100) not null,
    numero int not null,
    complemento varchar(100),
    mesCadastrado int, constraint ckMesEmpresaCadastrada
	check (mesCadastrado in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
);

create table telefone(
	idTelefone int primary key auto_increment,
    telefone varchar(15) not null,
    tpTelefone varchar(10), constraint chTpTelefone check (tpTelefone in ('Celular', 'Fixo')),
    fkEmpresa int, foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table usuario(
	idUsuario int primary key auto_increment,
    tpUsuario int, constraint chkTpUsuario check (tpUsuario in (0, 1, 2)),
    nome varchar(100),
    email varchar(100),
    usuario varchar(45) not null unique,
    senha varchar(45) not null,
    fkEmpresa int not null, foreign key(fkEmpresa) references empresa(idEmpresa)
);

create table lupulo(
	idLupulo int primary key auto_increment,
    tipoLupulo varchar(50) not null,
    qtdHrsIdealLuz double not null
);

create table plantacao(
	idPlantacao int primary key auto_increment,
    tpIluminacao varchar(45) not null, constraint chkTpIluminacao check (tpIluminacao in('Natural', 'Artificial')),
    metroQuadradoPlantacao double not null,
    regiao varchar(15) not null,
    estado char(2) not null,
    cidade varchar(25) not null,
    fkLupulo int not null, foreign key (fkLupulo) references lupulo(idLupulo),
    fkEmpresa int not null, foreign key (fkEmpresa) references empresa(idEmpresa),
    mesCadastrado int, constraint ckMesPlantacaoCadastrada
	check (mesCadastrado in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
);

create table sensor(
	idSensor int primary key auto_increment,
    tpSensor varchar(20) not null, constraint chkTpSensor check (tpSensor in('LDR5 - Luminosidade')),
    statusSensor varchar(15) not null, constraint chkStatusSensor check (statusSensor in('Ativo', 'Inativo', 'Em manutenção')),
    fkPlantacao int not null, foreign key(fkPlantacao) references plantacao(idPlantacao),
	regiao varchar(15) not null, constraint chkRegiao check (regiao in ('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'))
);

create table capturaLuminosidade(
	idCaptura int auto_increment,
    dtCaptura date not null,
    hrCaptura time not null,
    luminosidade double not null,
    fkSensor int, foreign key (fkSensor) references sensor(idSensor),
    primary key(idCaptura, fkSensor)
);

create table permissoes(
	idPermissao int,
    -- tipoPermissao int, constraint ckTpPermissao check (tipoPermissao in (0, 1)),
    fkUsuario int not null, foreign key(fkUsuario) references usuario(idUsuario),
    fkPlantacao int not null, foreign key(fkPlantacao) references plantacao(idPlantacao),
    fkEmpresa int, foreign key (fkEmpresa) references empresa(idEmpresa)
);
