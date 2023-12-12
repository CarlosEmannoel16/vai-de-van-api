import { IGetAllCitiesUseCase } from '@/data/protocols/usecases/city/GetCities';
import { ICityProtocolRepository } from '@/infra/protocols/city';
import { City } from '@prisma/client';

export class GetAllCitiesUseCase implements IGetAllCitiesUseCase {
  constructor(private readonly cityRepository: ICityProtocolRepository) {}
  async execute(): Promise<City[]> {
    const cities = await this.cityRepository.getAllCities();
    return cities;
  }
}
