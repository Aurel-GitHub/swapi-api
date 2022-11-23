import { Server } from '@hapi/hapi';
import { UserController } from '../../controllers/user/user.controller';

/**
 * @param server
 */
export const userRoute = (server: Server): void => {
  server.route({
    method: 'POST',
    path: '/login',
    handler: UserController.login,
  });
};
