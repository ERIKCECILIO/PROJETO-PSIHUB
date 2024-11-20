-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create DATABASE psihub;

USE psihub;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    tipoUsuario varchar(3),
	nome VARCHAR(50),
    crp CHAR(6),
	email VARCHAR(50),
	senha VARCHAR(50)
);

SELECT * FROM usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkPsicologo INT,
	FOREIGN KEY (fkPsicologo) REFERENCES usuario(id)
);

select * from aviso;

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fkPsicologo INT,
	FOREIGN KEY (fkPsicologo) REFERENCES psiFeed(id)
);

insert into psicologo (nome, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into psicologo (nome, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fkPsicologo) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fkPsicologo) values ('Aquário de Peixe-dourado', 2);