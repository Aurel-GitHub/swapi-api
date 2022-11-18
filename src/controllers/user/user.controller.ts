import { isValidLogin } from "./../../utils/validators/login.validator";
import { ResponseToolkit, ResponseObject, Request } from "@hapi/hapi";
import { IResponse } from "../../interfaces";

const token: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1a2UiLCJpYXQiOjE1MTYyMzkwMjJ9.lipSZVc8hvCTMP6sL-g-jDZ899ig3S8ZafDeM6JNiRM";
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
