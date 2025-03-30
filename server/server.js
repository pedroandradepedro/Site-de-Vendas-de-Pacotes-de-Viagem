import express from "express";
import autenticar from "../secure/autenticar.js";
import session from "express-session";

const porta = 3000;
const localhost = "0.0.0.0";

const app = express();

// configurando o processamento do formulario no express
app.use(express.urlencoded({ extended: true })); // Biblioteca QS

// definindo tempo de ociosidade da sessao, caso passe, deixa de ter acesso ao conteudo que está protegido no privado pelo autenticar
app.use(
  session({
    secret: "meupacotelaele123", // senha de segurança
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 15,
    },
  })
);

app.use(express.json());
app.use("/api", pacoteRoutes);

// oferecendo o resurso de login
// tipo de requisição padrão (get)
app.get("/login", (requisicao, resposta) => {
  resposta.redirect("/login.html");
});

// validar a senha no login para habilitar ou não a visualização da página
// relacionando o method POST e action do form
app.post("/login", (requisicao, resposta) => {
  const usuario = requisicao.body.usuario;
  const senha = requisicao.body.senha;
  if (usuario === "admin" && senha === "admin") {
    requisicao.session.autenticado = true;
    resposta.redirect("/menu.html");
  } else {
    resposta.redirect("/login.html");
  }
});

// usando arquivos públicos
app.use(express.static("./public"));

// usando arquivos privados
app.use(autenticar, express.static("./private"));

app.listen(porta, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${porta}`);
});
