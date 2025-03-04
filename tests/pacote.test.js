import request from "supertest";
import app from "../index.js";

describe("Testes para PacoteViagem", () => {
  it("Deve criar um pacote de viagem", async () => {
    const res = await request(app).post("/api/pacotes").send({
      destino: "Cancun",
      descricao: "Férias na praia",
      duracao: "7D/6N",
      preco: 750.0,
      imagem: "cancun.jpg",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.destino).toBe("Cancun");
  });

  it("Deve listar todos os pacotes de viagem", async () => {
    const res = await request(app).get("/api/pacotes");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
