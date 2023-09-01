import { City } from "@prisma/client";

export interface IGetCityRepository {
    getOne(id: string): Promise<City>

}