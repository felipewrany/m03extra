const mongoose = require("mongoose");

const usuarioModel = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: {type: String, required: true },
    last_login: {type: Date, default: Date.now}
    });
  
  const Usuario = mongoose.model("Usuarios", usuarioModel);
  
  module.exports = Usuario;