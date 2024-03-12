import { TravelInterface } from '@/domain/Travel/Interfaces/travel.interface';
import { Travel } from '@/domain/Travel/entity/Travel';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { ISearchTravelProtocolRepository } from '@/domain/Travel/repositories/SearchTravelProtocolRepository';

export class TravelAdapterRepository implements ITravelProtocolRepository {
  constructor() {}
  create(data: Travel): Promise<Travel> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Travel> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Travel): Promise<Travel> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  search(data: ISearchTravelProtocolRepository.Params): Promise<Travel[]> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Travel[]> {
    throw new Error('Method not implemented.');
  }
  findByIdRoute(id: string): Promise<Travel[]> {
    throw new Error('Method not implemented.');
  }
  findByCityOrigin(originId: string): Promise<TravelInterface[]> {
    throw new Error('Method not implemented.');
  }


}
