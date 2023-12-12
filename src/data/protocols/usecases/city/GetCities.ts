import { City } from "@prisma/client";

export interface IGetAllCitiesUseCase {
    execute(): Promise<City[]>
}