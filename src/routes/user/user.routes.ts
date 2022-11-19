import { Server } from '@hapi/hapi';
import { UserController } from '../../controllers/user/user.controller';

export const userRoute = (server: Server) => {
  server.route({
    method: 'POST',
    path: '/login',
    handler: UserController.login,
  });
};
