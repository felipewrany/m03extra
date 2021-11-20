const express = require("express");
const router = express.Router();
const UsuarioController = require('./../controllers/usuarios.controller');

router.get("/", UsuarioController.index);

router.post("/create", UsuarioController.postCreate);

router.get("/read/:id", UsuarioController.getRead);

router.get("/readall", UsuarioController.readAll);

router.put("/update/:id", UsuarioController.putUpdate);

router.delete("/delete/:id", UsuarioController.delDelete);

router.post("/login/:id", UsuarioController.login);

module.exports = router;