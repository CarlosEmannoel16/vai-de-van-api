import { ISearchTravelsUseCaseProtocol } from '@/domain/usecases/travels/SearchTravels';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';

export class SearchTravelsUseCase implements ISearchTravelsUseCaseProtocol {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}

  async execute(
    data: ISearchTravelsUseCaseProtocol.Params,
  ): Promise<ISearchTravelsUseCaseProtocol.Result[] | undefined> {
    console.log(data);
    const tripStops = await this.travelRepository.search(data);
    console.log(tripStops);
    const result: ISearchTravelsUseCaseProtocol.Result[] = tripStops.map((tripStop) => {
    console.log(result);
    return {
        dateOfDeparture: tripStop.departureDate,
        nameOrigin: tripStop.TripStops[0].City.name,
        nameDestiny:'',
        value: tripStop.TripStops[0].PricesBetweenStops[0].price,
    }
    });
    return result;
  }
}
