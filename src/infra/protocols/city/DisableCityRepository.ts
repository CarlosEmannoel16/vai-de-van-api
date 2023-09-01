import { City } from "@prisma/client";

export interface IDisableCityRepository {
    disable(id: string): Promise<City>

}