import { Server } from '@hapi/hapi';
import { SwapiController } from '../../controllers/swapi/swapi.controller';

/**
 * @param server
 */
export const swapiRoute = (server: Server): void => {
  server.route({
    method: 'GET',
    path: '/{type}/{isWookieSelected}/{id?}',
    handler: SwapiController.search,
  });
  server.route({
    method: 'GET',
    path: '/search/{type}/{name}',
    handler: SwapiController.searchByName,
  });
};
