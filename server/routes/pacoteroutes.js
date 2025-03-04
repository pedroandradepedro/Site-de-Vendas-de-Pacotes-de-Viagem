import express from "express";
import {
  criarPacote,
  listarPacotes,
  consultarPacote,
  atualizarPacote,
  excluirPacote,
} from "../controllers/pacotecontroller.js";

const router = express.Router();

router.post("/pacotes", criarPacote);
router.get("/pacotes", listarPacotes);
router.get("/pacotes/:id", consultarPacote);
router.put("/pacotes/:id", atualizarPacote);
router.delete("/pacotes/:id", excluirPacote);

export default router;
