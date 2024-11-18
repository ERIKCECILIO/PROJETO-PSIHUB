-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE psihub;

USE psihub;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    tipoUsuario char(3),
	nome VARCHAR(50),
    crp CHAR(6),
	email VARCHAR(50),
	senha VARCHAR(50)
);

INSERT INTO usuario values(
1, 'p', 'erik', '123456', 'erik@gmail.com', 'senha@123');

SELECT * FROM usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkPsiUsuario INT,
	FOREIGN KEY (fkPsiUsuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fkPsicologo INT,
	FOREIGN KEY (fkPsicologo) REFERENCES psicologo(id)
);

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
	FOREIGN KEY (fkPsicologo) REFERENCES aquario(id)
);

insert into psicologo (nome, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into psicologo (nome, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fkPsicologo) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fkPsicologo) values ('Aquário de Peixe-dourado', 2);