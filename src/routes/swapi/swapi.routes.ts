import { Server } from "@hapi/hapi";

export const swapiRoute = (server: Server) => {
  server.route({
    method: "GET",
    // path: `https://swapi.dev/api/`,
    path: `/v1/swapi`,
    handler: () => {},
  });
};
