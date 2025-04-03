import { FastifyInstance } from "fastify";

import accountRoutes from "./account.route";
import userRoutes from "./user.route";

async function routes(server: FastifyInstance) {
  server.register(userRoutes, { prefix: "/users" });
  server.register(accountRoutes, { prefix: "/accounts" });
}

export default routes;
