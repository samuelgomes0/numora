import fastify from "fastify";
import routes from "./routes";

const server = fastify();

server.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

server.register(routes, { prefix: "/api" });

export default server;
