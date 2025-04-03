import { FastifyInstance } from "fastify";

import accountRoutes from "./account.route";
import transactionRoutes from "./transaction.route";
import userRoutes from "./user.route";

async function routes(server: FastifyInstance) {
  server.register(userRoutes, { prefix: "/users" });
  server.register(accountRoutes, { prefix: "/accounts" });
  server.register(transactionRoutes, { prefix: "/transactions" });
}

export default routes;
