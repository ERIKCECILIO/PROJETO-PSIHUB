-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
SELECT fkPsicologo AS usuario, COUNT(*) AS total_publicacoes
FROM aviso
GROUP BY fkPsicologo;


SELECT count(*) as acertos FROM aviso;
SELECT count(*) FROM aviso;
SELECT count(id) FROM aviso;

SELECT fkPsicologo AS usuario, COUNT(id) AS total_publicacoes
        FROM aviso
        GROUP BY fkPsicologo
        ORDER BY total_publicacoes DESC;
        
        SELECT 
    HOUR(dataHora) AS hora, 
    COUNT(*) AS total_publicacoes
FROM aviso
GROUP BY HOUR(dataHora)
ORDER BY hora;

*/

create DATABASE psihub;

USE psihub;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    tipoUsuario varchar(3),
	nome VARCHAR(50),
    crp CHAR(7),
	email VARCHAR(50),
	senha VARCHAR(50)
);


select * from usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(2000),
    dataHora DATETIME DEFAULT current_timestamp,
	fkPsicologo INT,
	FOREIGN KEY (fkPsicologo) REFERENCES usuario(id)
);


SELECT * FROM aviso;

create table insights (

	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fkPsicologo INT,
	FOREIGN KEY (fkPsicologo) REFERENCES usuario(id)
);



