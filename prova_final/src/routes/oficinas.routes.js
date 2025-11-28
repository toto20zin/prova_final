const express = require("express");
const router = express.Router();

const oficinasController = require("../controllers/oficinas.controller");

router.get("/listaroficinas", oficinasController.listaroficinas);
router.post("/cadastraroficina", oficinasController.cadastraroficina);
router.put("/editaraoficina/:id", oficinasController.editaroficina);
router.delete("/excluiroficina/:id", oficinasController.excluiroficina)

module.exports = router;