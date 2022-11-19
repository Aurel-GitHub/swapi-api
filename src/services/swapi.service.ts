import axios, { AxiosStatic } from "axios";

export class SwapiService {
  private static baseUrl = "https://swapi.dev/api";

  /**
   *
   * @param type
   * @param id
   * @param isWookieLangSelected
   * @returns
   */
  public static async getObject(
    type: string,
    id: string | undefined,
    isWookieLangSelected: string
  ): Promise<AxiosStatic> {
    return await axios
      .get(
        `${this.baseUrl}/${type}/${id !== undefined ? Number(id) + "/" : ""}${
          Boolean(Number(isWookieLangSelected)) ? "/?format=wookiee" : ""
        }`
      )
      .then((res) => res.data)
      .catch((error: Error) => console.error(error));
  }

  /**
   *
   * @param searchType
   * @param name
   * @returns
   */
  public static async getObjectByName(
    searchType: string,
    name: string
  ): Promise<AxiosStatic> {
    return await axios
      .get(`${this.baseUrl}/${searchType}/?search=${name}`)
      .then((res) => res.data)
      .catch((error: Error) => console.error(error));
  }
}
