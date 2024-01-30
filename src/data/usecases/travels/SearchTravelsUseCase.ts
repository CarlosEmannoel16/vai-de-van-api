import { ISearchTravelsUseCaseProtocol } from '@/data/protocols/usecases/travels/SearchTravels';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';

export class SearchTravelsUseCase implements ISearchTravelsUseCaseProtocol {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}

  async execute(
    data: ISearchTravelsUseCaseProtocol.Params,
  ): Promise<ISearchTravelsUseCaseProtocol.Result[] | undefined> {


    const travels = await this.travelRepository.search(data);
    const result: ISearchTravelsUseCaseProtocol.Result[] = [];

    if (!travels) return undefined;

    travels.forEach(travel => {
      result.push({
        nameDestiny: travel.getNameStopById(data.destiny),
        nameOrigin: travel.getNameStopById(data.origin),
        dateOfDeparture: travel.getDateOfDepartureInBr(),
        value: travel.getValueBetweenStops(data.origin, data.destiny),
        driver: travel.nameDriver,
        vehicle: {
          classification: travel.classificationVehicle,
        },
        quantity: travel.getQuantitySeatsBetweenStops(
          data.origin,
          data.destiny,
        ),
      });
    });

    console.log(result);

    return result;
  }
}
