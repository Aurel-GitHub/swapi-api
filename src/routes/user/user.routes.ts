import { Server } from "@hapi/hapi";

export const userRoute = (server: Server) => {
  server.route({
    method: "POST",
    path: `/v1/swapi/login`,
    handler: () => {},
  });
};
