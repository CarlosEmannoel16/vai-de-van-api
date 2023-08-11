import { IGetAllCitiesUseCase } from "@/domain/usecases/city/GetCities";
import { IGetAllCitiesRepository } from "@/infra/protocols/city/getAllCitisRepository";
import { City } from "@prisma/client";

export class GetAllCitiesUseCase implements IGetAllCitiesUseCase{

    constructor(private readonly getAllCities: IGetAllCitiesRepository) {}
    async hadle(): Promise<City[]> {
      const cities = await this.getAllCities.getAllCities()
      return cities
    }

}