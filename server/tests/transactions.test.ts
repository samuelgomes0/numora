import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import server from "../src/server";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it("should be able to list all transactions", async () => {
    await request(server.server)
      .get("/api/transactions")
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  it("should be able to create a new transaction", async () => {
    await request(server.server)
      .post("/api/transactions")
      .send({
        description: "Teste",
        amount: 50,
        date: "2024-08-17",
        transactionType: "INCOME",
        accountId: "a1552c58-c4e1-437d-abe2-10d32c76b85c",
      })
      .expect(201);
  });
});
