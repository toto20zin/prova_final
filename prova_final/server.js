require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunoRoutes = require('./src/routes/alunos.routes');
const oficinasRoutes = require('./src/routes/oficinas.routes');
const inscricoesRoutes = require('./src/routes/inscricoes.routes');


app.use(express.json());
app.use(cors());

app.use(alunoRoutes);
app.use(oficinasRoutes);
app.use(inscricoesRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})