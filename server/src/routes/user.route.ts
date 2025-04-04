import { FastifyInstance } from "fastify";
import z from "zod";
import { UserRepository } from "../repositories";
import { userCreateSchema } from "../schemas";
import { UserUseCase } from "../usecases";

async function userRoutes(server: FastifyInstance) {
  const userRepository = new UserRepository();
  const userUseCase = new UserUseCase(userRepository);

  server.get("/", async (request, reply) => {
    return userUseCase.findAll();
  });

  server.post("/", async (request, reply) => {
    try {
      const { name, email, password } = userCreateSchema.parse(request.body);

      const user = await userUseCase.create({ name, email, password });

      return reply.code(201).send(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.code(400).send({
          message: "Validation failed",
          errors: error.errors,
        });
      }

      return reply.code(500).send({
        message: error instanceof Error ? error.message : "Unexpected error",
      });
    }
  });
}

export default userRoutes;
