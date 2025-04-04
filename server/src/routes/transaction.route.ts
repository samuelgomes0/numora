import { FastifyInstance } from "fastify";
import { TransactionRepository } from "../repositories";
import { transactionCreateSchema } from "../schemas";
import { TransactionUseCase } from "../usecases/";

async function transactionRoutes(server: FastifyInstance) {
  const transactionRepository = new TransactionRepository();
  const transactionUseCase = new TransactionUseCase(transactionRepository);

  server.get("/", async (request, reply) => {
    return transactionUseCase.findAll();
  });

  server.post("/", async (request, reply) => {
    const { description, amount, date, transactionType, accountId } =
      transactionCreateSchema.parse(request.body);

    const transaction = transactionUseCase.create({
      description,
      amount,
      date: new Date(date),
      transactionType,
      accountId,
    });

    return reply.status(201).send(transaction);
  });
}

export default transactionRoutes;
