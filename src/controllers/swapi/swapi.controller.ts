import { ResponseToolkit, Request, ResponseObject } from "@hapi/hapi";
import { SwapiService } from "../../services";
export class SwapiController {
  /**
   * @param req
   * @param res
   * @returns
   */
  public static async search(
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject | any> {
    const { type, id, isWookieSelected } = req.params;
    try {
      if (!type && !isWookieSelected) {
        return res.response("Recherche incorrecte").code(400);
      }
      const result = await SwapiService.getObject(
        type,
        Number(id),
        Boolean(Number(isWookieSelected))
      );

      return res.response(result).code(200);
    } catch (error: any) {
      return res.response(error).code(500);
    }
  }
}
