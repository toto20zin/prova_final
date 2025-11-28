const db = require("../data/connection");

const listarinscricoes = async (req, res) => {
    try {
        const resultados = await db.query("SELECT * FROM inscricoes;");
        res.status(200).json(resultados[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const cadastrarinscricao = async (req, res) => {
    try {
        const { data_inscricao, aluno_id, oficina_id } = req.body;

        const novainscricao = await db.query(
            "INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) VALUES (?, ?, ?)",
            [data_inscricao, aluno_id, oficina_id]
        );

        const inscricao = {
            id: novainscricao[0].insertId,
            data_inscricao,
            aluno_id,
            oficina_id
        };

        res.status(201).json(inscricao).end();

    } catch (error) {
        res.status(500).json(error).end();
    }
};

const editarinscricao = async (req, res) => {
    try {
        const { id, data_inscricao, aluno_id, oficina_id } = req.body;

        await db.query(
            "UPDATE inscricoes SET data_inscricao = ?, aluno_id = ?, oficina_id = ? WHERE id = ?",
            [data_inscricao, aluno_id, oficina_id, id]
        );

        res.status(200).json({ message: "Inscrição editada!" }).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluirinscricoes = async (req, res) => {
    try {
        const { id } = req.params;

        await db.query(
            "DELETE FROM inscricoes WHERE id = ?",
            [id]
        );

        res.status(200).json({ message: "Inscrição deletada!" }).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const totaldeinscricoesporoficina = async (req, res) => {
    try {
        const { id } = req.params;

        const resultados = await db.query(
            "SELECT * FROM inscricoes WHERE oficina_id = ?",
            [id]
        );

        res.status(200).json(resultados[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const inscricoesporcategoria = async (req, res) => {
    try {
        const { categoria } = req.params;

        const resultados = await db.query(
            `SELECT i.*
             FROM inscricoes i
             JOIN oficinas o ON i.oficina_id = o.id   -- CORRIGIDO AQUI
             WHERE o.categoria = ?`,
            [categoria]
        );

        res.status(200).json(resultados[0]).end();

    } catch (error) {
        res.status(500).json(error).end();
    }
};

module.exports = {
    listarinscricoes,
    cadastrarinscricao,
    editarinscricao,
    excluirinscricoes,
    totaldeinscricoesporoficina,
    inscricoesporcategoria
};
