import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { Travel } from '@prisma/client';

export class FindAllTravels implements IListAllTravels {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}
  async execute(): Promise<IListAllTravels.Params[]> {
    return this.travelRepository.findAll();
  }
}
