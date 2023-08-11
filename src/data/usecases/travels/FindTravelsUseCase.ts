import { IListAllTravels } from '@/domain/usecases/travels/LisatAllTravels';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';
import { Travel } from '@prisma/client';

export class FindTravels implements IListAllTravels {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}
  async execute(): Promise<Travel[]> {
    
    return this.travelRepository.findAll();
  }
}
