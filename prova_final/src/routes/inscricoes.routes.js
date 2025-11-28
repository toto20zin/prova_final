const express = require("express");
const router = express.Router();

const inscricoesController = require("../controllers/inscricoes.controller");

router.get("/listarinscricoes", inscricoesController.listarinscricoes);
router.post("/cadastrarinscricao", inscricoesController.cadastrarinscricao);
router.put("/editarinscricao", inscricoesController.editarinscricao);
router.delete("/excluirinscricao/:id", inscricoesController.excluirinscricoes);
router.get("/inscricoes/oficina/:id", inscricoesController.totaldeinscricoesporoficina);
router.get("/inscricoes/categoria/:categoria", inscricoesController.inscricoesporcategoria);

module.exports = router;