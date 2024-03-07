import { ISearchTravelsUseCaseProtocol } from '@/data/protocols/usecases/travels/SearchTravels';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';

export class SearchTravelsUseCase implements ISearchTravelsUseCaseProtocol {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}

  async execute(
    data: ISearchTravelsUseCaseProtocol.Params,
  ): Promise<ISearchTravelsUseCaseProtocol.Result[] | undefined> {
    const travels = await this.travelRepository.search({
      dateOfTravel: data.dateOfTravel,
      origin: data.origin,
      destiny: data.destiny,
    });

    if (!travels) return undefined;
    const result: ISearchTravelsUseCaseProtocol.Result[] = [];

    travels.forEach(travel => {
      result.push({
        nameDestiny: travel.getNameStopById(data.destiny),
        nameOrigin: travel.getNameStopById(data.origin),
        dateOfDeparture: travel.getDateOfDepartureInBr(),
        hourOfDeparture: travel.getHourOfDepartureInBr(),
        hourOfArrival: travel.getHourOfArrivalInBr(),
        value: travel.getValueBetweenStops(data.origin, data.destiny),
        driver: travel.nameDriver,
        quantityOfSeats: travel.getQuantitySeatsBetweenStops(
          data.origin,
          data.destiny,
        ),
        quantityOfStops: travel
          .getQuantityStopsBetweenStops(data.origin, data.destiny)
          .toString(),
      });
    });

    console.log(result);
    return result;
  }
}
