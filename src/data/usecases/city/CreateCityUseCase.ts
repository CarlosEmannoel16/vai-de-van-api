import { ICreateCityUseCase } from '@/domain/usecases/city/CreateCity';
import { IGetAllCitiesRepository } from '@/infra/protocols/city/GetAllCitiesRepository';
import { City } from '@prisma/client';

export class CreateCityUseCase implements ICreateCityUseCase {
  constructor(private readonly cityRepository: IGetAllCitiesRepository) {}
  async execute(): Promise<City[]> {
    throw new Error('Method not implemented.');
  }
}
