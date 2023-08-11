import { City, PrismaClient } from "@prisma/client";
import { IGetAllCitiesRepository } from "./protocols/city/getAllCitisRepository";

const prisma = new PrismaClient();

export class CityRepository implements IGetAllCitiesRepository{
    async getAllCities(): Promise<City[]> {
        return prisma.city.findMany()
    }
}