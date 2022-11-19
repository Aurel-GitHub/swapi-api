import { ResponseToolkit, Request, ResponseObject } from '@hapi/hapi';
import { SwapiService } from '../../services';
export class SwapiController {
  /**
   * @param req
   * @param res
   * @returns
   */
  public static async search(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const { type, id, isWookieSelected } = req.params;
    try {
      if (!type && !isWookieSelected) {
        return res.response('Recherche incorrecte').code(400);
      }

      const result = await SwapiService.getObject(type, id, isWookieSelected);
      return res.response(result).code(200);
    } catch (error: any) {
      return res.response(error).code(500);
    }
  }

  public static async searchByName(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    const { type, name } = req.params;
    try {
      if (!type && !name) {
        return res.response('Recherche incorrecte').code(400);
      }
      const result = await SwapiService.getObjectByName(type, name);
      return res.response(result).code(200);
    } catch (error: any) {
      return res.response(error).code(500);
    }
  }
}
