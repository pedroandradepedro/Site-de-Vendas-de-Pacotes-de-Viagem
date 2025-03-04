import pacoteViagem from "../models/pacoteviagem.js";

// Criar Pacote
export const criarPacote = async (req, res) => {
  try {
    const pacote = await pacoteViagem.create(req.body);
    res.status(201).json(pacote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar Pacotes
export const listarPacotes = async (req, res) => {
  try {
    const pacotes = await pacoteViagem.findAll();
    res.status(200).json(pacotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consultar Pacote por ID
export const consultarPacote = async (req, res) => {
  try {
    const pacote = await pacoteViagem.findByPk(req.params.id);
    if (pacote) {
      res.status(200).json(pacote);
    } else {
      res.status(404).json({ error: "Pacote não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar Pacote
export const atualizarPacote = async (req, res) => {
  try {
    const pacote = await pacoteViagem.findByPk(req.params.id);
    if (pacote) {
      await pacote.update(req.body);
      res.status(200).json(pacote);
    } else {
      res.status(404).json({ error: "Pacote não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Excluir Pacote
export const excluirPacote = async (req, res) => {
  try {
    const pacote = await pacoteViagem.findByPk(req.params.id);
    if (pacote) {
      await pacote.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Pacote não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
