import { City } from "@prisma/client";

export interface ICreateCityRepository {
    create(data: City): Promise<City>

}