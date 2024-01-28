import { IGetAllDriversUseCase } from '@/data/protocols/usecases/driver/GetAllDrivers';
import { IFindAllDriversProtocolRepository } from '@/domain/Driver/repositories/FindAllDriversProtocolRepository';

export class GetAllDriversUseCase implements IGetAllDriversUseCase {
  constructor(
    private getAllDriversRepository: IFindAllDriversProtocolRepository,
  ) {}

  async execute(): Promise<IGetAllDriversUseCase.Result[]> {
    const result = await this.getAllDriversRepository.findAll();
    return result.map((driver) => ({
      id: driver.id,
      name: driver.name,
    }));
  }
}
