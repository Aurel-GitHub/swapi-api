import { token } from "./../../constants/token";
import { isValidLogin } from "./../../utils/validators/login.validator";
import { ResponseToolkit, ResponseObject, Request } from "@hapi/hapi";
import { IResponse } from "../../interfaces";

export const login = async (
  request: Request,
  hapi: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const payload: string[] = Object.values(request.payload);
    if (isValidLogin(payload)) {
      const response: IResponse = {
        firstname: payload.at(0),
        token,
      };
      return hapi.response(response).code(200);
    } else {
      return hapi
        .response("Cet utilisateur n'est pas inscrit au registre de la Cantina")
        .code(400);
    }
  } catch (error: any) {
    return hapi.response(error).code(500);
  }
};
