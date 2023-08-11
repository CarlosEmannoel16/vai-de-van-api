import { City } from "@prisma/client";

export interface IGetAllCitiesUseCase {
    hadle(): Promise<City[]>
}