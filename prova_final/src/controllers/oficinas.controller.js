const db = require("../data/connection");

const listaroficinas = async (req, res) => {
    try {
        const resultados = await db.query("SELECT * FROM oficinas;");
        res.status(200).json(resultados[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

const cadastraroficina = async (req, res) => {
    const { nome, categoria, vagas } = req.body;

    const novaoficina = await db.query(
        'INSERT INTO oficinas (nome, categoria, vagas) VALUES (?, ?, ?)', 
        [nome, categoria, vagas]
    );

    const oficina = {
        id: novaoficina[0].insertId,
        nome,
        categoria,
        vagas
    };

    res.status(201).json(oficina);
}

const editaroficina = async (req, res) => {
    try {
        const { id } = req.params; 
        const { nome, categoria, vagas } = req.body;

        await db.query(
            "UPDATE oficinas SET nome = ?, categoria = ?, vagas = ? WHERE id = ?", 
            [nome, categoria, vagas, id]
        );

        res.status(200).json({ message: 'Oficina editada!' });
    } catch (error) {
        res.status(500).json(error);
    }
}

const excluiroficina = async (req, res) => {
    try {
        const { id } = req.params;

        await db.query("DELETE FROM oficinas WHERE id = ?", [id]);

        res.status(200).json({ message: 'Oficina deletada!' });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    listaroficinas,
    cadastraroficina,
    editaroficina,
    excluiroficina
};