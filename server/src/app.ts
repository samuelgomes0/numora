import server from "./server";

const PORT = Number(process.env.PORT) || 3333;

server.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server is running successfully at ${address}`);
});
