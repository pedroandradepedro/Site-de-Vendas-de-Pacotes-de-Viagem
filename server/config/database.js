import { Sequelize } from "sequelize";

const sequelize = new Sequelize("agencia_viagem", "root", "sua_senha", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
} catch (error) {
  console.error("Erro ao conectar com o banco de dados:", error);
}

export default sequelize;
