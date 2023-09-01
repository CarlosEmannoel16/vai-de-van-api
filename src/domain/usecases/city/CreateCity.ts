import { City } from "@prisma/client";

export interface ICreateCityUseCase {
    execute(): Promise<City[]>
}