import { Server } from "@hapi/hapi";
import { route } from "./routes/swapi.routes";

export const init = async () => {
  const server: Server = new Server({
    port: 5000,
    host: "localhost",
  });

  server.start();
  console.log(`server running on: ${server.info.uri}`);
};
