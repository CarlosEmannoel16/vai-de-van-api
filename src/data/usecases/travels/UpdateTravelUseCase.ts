import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { IUpdateTravelProtocolRepository } from '@/domain/Travel/repositories/UpdateTravelProtocolRepository';

export class UpdateTravelUseCase {
  constructor(private updateTravelRepository: ITravelProtocolRepository) {}

  execute(data: any): Promise<any> {
    this.updateTravelRepository.findById(data);
  }
}
