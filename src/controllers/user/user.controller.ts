import { token } from "../../constants/token";
import { isValidLogin } from "../../utils/validators/login.validator";
import { ResponseToolkit, ResponseObject, Request } from "@hapi/hapi";
import { IResponse } from "../../interfaces";

export class UserController {
  public static async login(
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> {
    try {
      const payload: string[] = Object.values(req.payload);
      if (isValidLogin(payload)) {
        const response: IResponse = {
          firstname: payload.at(0),
          token,
        };
        return res.response(response).code(200);
      } else {
        return res
          .response(
            "Cet utilisateur n'est pas inscrit au registre de la Cantina"
          )
          .code(400);
      }
    } catch (error: any) {
      return res.response(error).code(500);
    }
  }
}
