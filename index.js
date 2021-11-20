const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


const Connected = require("./models/conn/index");
app.use(express.json());

Connected();

app.use(cors());
app.options("*", cors());//Por enquanto o CORS tá liberando todo mundo

app.get("/", (req, res) => { //Rota geral, manter por boas práticas
  res.status(200).json({ message: "Rota geral do projeto funcionando" });
});

const routerUsuarios = require("./routers/usuarios.routes");
app.use("/usuarios", routerUsuarios);


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});