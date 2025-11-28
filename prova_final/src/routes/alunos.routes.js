const express = require("express");
const router = express.Router();

const alunosController = require("../controllers/alunos.controller");

router.get("/listaralunos", alunosController.listaralunos);
router.post("/cadastraraluno", alunosController.cadastraraluno);
router.put("/editaraluno/:id", alunosController.editaraluno);
router.delete("/excluiraluno/:id", alunosController.excluiraluno);

module.exports = router;