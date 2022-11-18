import axios from "axios";

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
      .then((r) => r.data)
      .catch((error: Error) => console.error(error));
  }

  public static async searchPeople(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
    return await this.globalSearch("people", params, isWookieLangSelected);
  }

  public static async searchPlanets(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
    return await this.globalSearch("planets", params, isWookieLangSelected);
  }

  public static async searchFilms(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
    return await this.globalSearch("films", params, isWookieLangSelected);
  }

  public static async searchSpecies(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
    return await this.globalSearch("species", params, isWookieLangSelected);
  }

  public static async searchVehicles(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
    return await this.globalSearch("vehicles", params, isWookieLangSelected);
  }

  public static async searchStarships(
    params: string,
    isWookieLangSelected: boolean
  ): Promise<any[]> {
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
