import { ResponseToolkit, ResponseObject, Request } from "@hapi/hapi";
import { SwapiService } from "../../services";

export class SwapiController {
  public static async getType(
    req: Request,
    res: ResponseToolkit
  ): Promise<any> {
    const { type, id, isWookieLangSelected } = req.params;

    try {
      if (!type && !id) {
        res.response("Le type n'existe pas").code(400);
      } else {
        const typeReturned: any = await SwapiService.getObjectDetail(
          type,
          parseInt(id),
          isWookieLangSelected
        );
        return res.response(typeReturned).code(200);
      }
    } catch (error: any) {
      return res.response(error).code(500);
    }
  }

  /**
   * todo - aurelien retravailler cette fonction voir user controller
   * @param req
   * @param res
   * @returns
   */
  public static async search(req: Request, res: Response): Promise<void> {
    const { keyword, isWookieLangSelected } = req.query;
    if (!keyword) {
      res.status(400).json("No url provided").end();
      return;
    }

    const peoples = await SwapiService.searchPeople(
      keyword.toString(),
      isWookieLangSelected
    );
    const planets = await SwapiService.searchPlanets(
      keyword.toString(),
      isWookieLangSelected
    );
    const films = await SwapiService.searchFilms(
      keyword.toString(),
      isWookieLangSelected
    );
    const species = await SwapiService.searchSpecies(
      keyword.toString(),
      isWookieLangSelected
    );
    const vehicles = await SwapiService.searchVehicles(
      keyword.toString(),
      isWookieLangSelected
    );
    const starships = await SwapiService.searchStarships(
      keyword.toString(),
      isWookieLangSelected
    );
    const results = [
      ...peoples,
      ...planets,
      ...films,
      ...species,
      ...vehicles,
      ...starships,
    ];

    res.json(results).end();
  }
}
