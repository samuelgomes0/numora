import { FastifyInstance } from "fastify";
import z from "zod";
import { AccountRepository } from "../repositories";
import { accountCreateSchema } from "../schemas/accountCreate.schema";
import AccountUseCase from "../usecases/account.usecase";

function accountRoutes(server: FastifyInstance) {
  const accountRepository = new AccountRepository();
  const accountUseCase = new AccountUseCase(accountRepository);

  server.get("/", (request, reply) => {
    return accountUseCase.findAll();
  });

  server.post("/", async (request, reply) => {
    try {
      const { userId, name } = accountCreateSchema.parse(request.body);

      const account = await accountUseCase.create({ userId, name });

      return reply.code(201).send(account);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.code(400).send({
          message: "Validation failed",
          errors: error.errors,
        });
      }
    }
  });
}

export default accountRoutes;
