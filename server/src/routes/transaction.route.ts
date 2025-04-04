import { FastifyInstance } from "fastify";
import { TransactionRepository } from "../repositories";
import { TransactionUseCase } from "../usecases/";

async function transactionRoutes(server: FastifyInstance) {
  const transactionRepository = new TransactionRepository();
  const transactionUseCase = new TransactionUseCase(transactionRepository);

  server.get("/", async (request, reply) => {
    return transactionUseCase.findAll();
  });
}

export default transactionRoutes;
