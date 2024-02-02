import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
import { IUpdateTravelProtocolRepository } from '@/domain/Travel/repositories/UpdateTravelProtocolRepository';

export class UpdateTravelUseCase {
  constructor(
    private updateTravelRepository: IUpdateTravelProtocolRepository,
  ) {}

  execute(data: any): Promise<any> {


    this.updateTravelRepository.update(data);
  }
}
