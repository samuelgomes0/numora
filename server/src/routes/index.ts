import fastify, { FastifyInstance } from "fastify";

const server = fastify();

export default async function routes(server: FastifyInstance) {
  server.register(userRoutes, { prefix: "/users" });
}
