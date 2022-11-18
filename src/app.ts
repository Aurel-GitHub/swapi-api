import { userRoute } from "./routes/user/user.routes";
import { Server } from "@hapi/hapi";
import { swapiRoute } from "./routes/swapi/swapi.routes";

export const init = async () => {
  const server: Server = new Server({
    port: 5000,
    host: "localhost",
  });

  swapiRoute(server);
  userRoute(server);

  server.start();
  console.log(`server running on: ${server.info.uri}`);
};
