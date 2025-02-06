import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

export default server;
