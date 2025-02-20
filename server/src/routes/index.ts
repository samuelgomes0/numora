import { FastifyInstance } from "fastify";

import userRoutes from "./user.route";

async function routes(server: FastifyInstance) {
  server.register(userRoutes, { prefix: "/users" });
}

export default routes;
