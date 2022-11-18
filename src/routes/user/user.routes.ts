import { Server } from "@hapi/hapi";
import { login } from "../../controllers/user/user.controller";

export const userRoute = (server: Server) => {
  server.route({
    method: "POST",
    path: "/login",
    handler: login,
  });
};
