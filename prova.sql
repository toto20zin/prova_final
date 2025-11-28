DROP DATABASE IF EXISTS oficinasT;
CREATE DATABASE oficinasT;
USE oficinasT;


CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    turma VARCHAR(50) NOT NULL
);


CREATE TABLE oficinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    vagas INT NOT NULL,
    categoria VARCHAR(100)
);


CREATE TABLE inscricoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    oficina_id INT NOT NULL,
    data_inscricao DATE DEFAULT CURRENT_DATE,

    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (oficina_id) REFERENCES oficinas(id)
);



SELECT o.id, o.nome, COUNT(i.id) AS total
FROM oficinas o
LEFT JOIN inscricoes i ON i.oficina_id = o.id
GROUP BY o.id, o.nome;


SELECT a.id, a.nome, COUNT(i.id) AS total
FROM alunos a
LEFT JOIN inscricoes i ON i.aluno_id = a.id
GROUP BY a.id, a.nome;


SELECT i.id, a.nome AS aluno, o.nome AS oficina, i.data_inscricao
FROM inscricoes i
JOIN alunos a ON a.id = i.aluno_id
JOIN oficinas o ON o.id = i.oficina_id;



INSERT INTO alunos (nome, turma) VALUES ("Thomas Fantini", "2b");
INSERT INTO alunos (nome, turma) VALUES ("victor martins", "1a");
INSERT INTO alunos (nome, turma) VALUES ("richard chrispim", "3c");

INSERT INTO oficinas (nome, vagas, categoria) VALUES ("música", 10, "música");
INSERT INTO oficinas (nome, vagas, categoria) VALUES ("artes", 15, "Artes");
INSERT INTO oficinas (nome, vagas, categoria) VALUES ("Dança", 8, "dança");

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ("2025-09-03", 1, 1);

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ("2025-05-10", 2, 1);

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ("2025-10-31", 3, 2);

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ("2025-08-06", 1, 3);
