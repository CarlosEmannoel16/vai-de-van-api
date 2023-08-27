import { ISearchTravelsUseCaseProtocol } from '@/domain/usecases/travels/SearchTravels';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';
import { Travel } from '@prisma/client';

export class SearchTravelsUseCase implements ISearchTravelsUseCaseProtocol {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}

  async execute(
    data: ISearchTravelsUseCaseProtocol.Params,
  ): Promise<ISearchTravelsUseCaseProtocol.Result | undefined> {
    console.log(data);
    const tripStops = await this.travelRepository.search(data);
    console.log(tripStops);
    const result: ISearchTravelsUseCaseProtocol.Result[] = tripStops.map((tripStop) => {
    console.log(result);
    return {
        dateOfDeparture: tripStop.Travel.departureDate,
        nameOrigin: tripStop.City.name,
        nameDestiny: tripStop.cityIdFromTo,
       // value: tripStop.value,
    }
    });
    return {
      dateOfDeparture: new Date(),
      nameDestiny: '',
      nameOrigin: '',
      value: 0,
    };
  }
}