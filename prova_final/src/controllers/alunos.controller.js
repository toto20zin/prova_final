const db = require("../data/connection");

const listaralunos = async (req, res) => {
    try {
        const resultados = await db.query("SELECT * FROM alunos;");
        res.status(200).json(resultados[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

const cadastraraluno = async (req, res) => {
    const { nome, turma } = req.body;

    const novoaluno = await db.query(
        'INSERT INTO alunos (nome, turma) VALUES(?, ?)', 
        [nome, turma]
    );

    const aluno = {
        id: novoaluno[0].insertId,
        nome,
        turma
    };

    res.status(201).json(aluno).end();
}

const editaraluno = async (req, res) => {
    try {
        const { id } = req.params;     // ID vem da URL agora
        const { nome, turma } = req.body;

        await db.query(
            "UPDATE alunos SET nome = ?, turma = ? WHERE id = ?", 
            [nome, turma, id]
        );

        res.status(200).json({ message: 'Aluno editado!' }).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

const excluiraluno = async (req, res) => {
    try {
        const { id } = req.params;

        await db.query("DELETE FROM alunos WHERE id = ?", [id]);

        res.status(200).json({ message: 'Aluno deletado!' }).end();
    } catch (error) {
        console.log(error);
        res.status(500).json(error).end();
    }
}

module.exports = {
    listaralunos,
    cadastraraluno,
    editaraluno,
    excluiraluno
}
