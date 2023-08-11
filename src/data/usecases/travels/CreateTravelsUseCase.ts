import { ICreateTravels } from '@/domain/usecases/travels/CreateTravels';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';
import { Travel } from '@prisma/client';

export class CreateTravels implements ICreateTravels {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}
  async execute(data: ICreateTravels.Params): Promise<Travel> {
    
    return this.travelRepository.create(data);
  }
}
