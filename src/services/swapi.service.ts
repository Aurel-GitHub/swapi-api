import { ISpecies } from "./../interfaces/i-species";
import { IPlanets } from "./../interfaces/i-planets";
import { IPeoples } from "./../interfaces/i-peoples";
import axios from "axios";
import { IFilms, IStarship, IVehicles } from "../interfaces";

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
    id: number | null,
    isWookieLangSelected: boolean
  ): Promise<any> {
    return await axios
      .get(
        `${this.baseUrl}/${type}/${id !== null ? id + "/" : ""}${
          isWookieLangSelected ? "/?format=wookiee" : ""
        }`
      )
      .then((res) => res.data)
      .catch((error: Error) => console.error(error));
  }

  private static async globalSearch(
    searchType: string,
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
    return await axios
      .get(
        `${this.baseUrl}/${searchType}/${params && "?search=" + params}/${
          isWookieLangSelected && "?format=wookiee"
        }`
      )
      .then((r) => r.data["results"]);
  }
}
