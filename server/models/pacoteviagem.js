import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const pacoteViagem = sequelize.define("PacoteViagem", {
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

await pacoteViagem.sync();
export default pacoteViagem;
