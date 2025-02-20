import express from "express";
import autenticar from "../secure/autenticar";

const porta = 3000;
const localhost = "0.0.0.0";

const app = express();

app.use(express.static("./public"));

app.use(autenticar, express.static("./private"));

// app.get("/dinheiro", (req, res) => {
//   res.send("R$ 100,00");
// });

app.listen(porta, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${porta}`);
});
