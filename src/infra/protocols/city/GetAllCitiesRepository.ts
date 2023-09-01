import { City } from "@prisma/client";

export interface IGetAllCitiesRepository {
    getAllCities(): Promise<City[]>

}