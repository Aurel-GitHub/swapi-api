import { ISpecies } from "./../interfaces/i-species";
import { IPlanets } from "./../interfaces/i-planets";
import { IPeoples } from "./../interfaces/i-peoples";
import axios from "axios";
import { IFilms, IStarship, IVehicles } from "../interfaces";

export class SwapiService {
  private static baseUrl = "https://swapi.dev/api";

  /**
   * @param type
   * @param id
   * @param isWookieLangSelected
   * @return Promise
   */
  public static async getObjectDetail(
    type: string,
    id: number,
    isWookieLangSelected: boolean
  ): Promise<void> {
    return await axios
      .get(
        `${this.baseUrl}/${type}/${id}/${
          isWookieLangSelected && "?format=wookiee"
        }`
      )
      .then((res) => res.data)
      .catch((error: Error) => console.error(error));
  }
  /**
   *
   * @param params
   * @param isWookieLangSelected
   * @returns IPeoples[]
   */
  public static async searchPeople(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<IPeoples[]> {
    return await this.globalSearch("people", params, isWookieLangSelected);
  }

  /**
   *
   * @param params
   * @param isWookieLangSelected
   * @returns IPlanets[]
   */
  public static async searchPlanets(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<IPlanets[]> {
    return await this.globalSearch("planets", params, isWookieLangSelected);
  }

  /**
   *
   * @param params
   * @param isWookieLangSelected
   * @returns IFilms[]
   */
  public static async searchFilms(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<IFilms[]> {
    return await this.globalSearch("films", params, isWookieLangSelected);
  }

  /**
   *
   * @param params
   * @param isWookieLangSelected
   * @returns ISpecies[]
   */
  public static async searchSpecies(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<ISpecies[]> {
    return await this.globalSearch("species", params, isWookieLangSelected);
  }

  /**
   *
   * @param params
   * @param isWookieLangSelected
   * @returns IVehicles[]
   */
  public static async searchVehicles(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<IVehicles[]> {
    return await this.globalSearch("vehicles", params, isWookieLangSelected);
  }

  /**
   *
   * @param params
   * @param isWookieLangSelected
   * @returns IStarship[]
   */
  public static async searchStarships(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<IStarship[]> {
    return await this.globalSearch("starships", params, isWookieLangSelected);
  }

  private static globalSearch = async (
    searchType: string,
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> => {
    return await axios
      .get(
        `${this.baseUrl}/${searchType}/?search=${params}/${
          isWookieLangSelected && "?format=wookiee"
        }`
      )
      .then((r) => r.data["results"]);
  };
}
