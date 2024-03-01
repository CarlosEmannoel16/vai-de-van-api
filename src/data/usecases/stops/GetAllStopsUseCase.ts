import { IGetAllStopsProtocolUseCase } from '@/data/protocols/usecases/stops/GetAllStopsInterface';
import { StopInterface } from '@/domain/Stop/interface/StopInterface';
import { IStopProtocolRepository } from '@/infra/protocols/stops/StopProtocolRepository';

export class GetAllStopsUseCase implements IGetAllStopsProtocolUseCase {
  constructor(private readonly stopRepository: IStopProtocolRepository) {}
  async execute(): Promise<IGetAllStopsProtocolUseCase.Params[]> {
    const stops = await this.stopRepository.getAll();
    return stops.map(stop => ({
      id: stop.id,
      name: stop.name,
    }));
  }
}
