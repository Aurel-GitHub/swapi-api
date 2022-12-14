import { token } from '../../constants/token';
import { isValidLogin } from '../../utils/validators/login.validator';
import { ResponseToolkit, ResponseObject, Request } from '@hapi/hapi';
import { IResponse } from '../../interfaces';

export class UserController {
  /**
   * @param req
   * @param res
   * @returns
   */
  public static async login(req: Request, res: ResponseToolkit): Promise<ResponseObject> {
    try {
      const payload: string[] = Object.values(req.payload);
      if (isValidLogin(payload)) {
        const response: IResponse = {
          firstname: payload.at(0),
          token,
        };
        return res.response(response).code(200);
      } else {
        return res.response('This user is not registered at the Cantina').code(400);
      }
    } catch (error: any) {
      return res.response(error).code(500);
    }
  }
}
