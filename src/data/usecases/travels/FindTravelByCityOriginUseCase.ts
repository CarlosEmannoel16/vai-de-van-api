import { IFindTravelByOriginIdUseCaseProtocol } from '@/data/protocols/usecases/travels/FindTravelByIOriginId';
import { FindTravelByOriginIdProtocolRepository } from '@/domain/Travel/repositories/FindTravelByOriginIdProtocolRepository';

export class FindTravelByCityOriginUseCase
  implements IFindTravelByOriginIdUseCaseProtocol
{
  constructor(
    private travelRepository: FindTravelByOriginIdProtocolRepository,
  ) {}

  async execute(
    data: IFindTravelByOriginIdUseCaseProtocol.Params,
  ): Promise<IFindTravelByOriginIdUseCaseProtocol.Result[] | undefined> {
    if (!data.origin) throw new Error('Origin is required');

    const result = await this.travelRepository.findByCityOrigin(data.origin);

    return result.map(travel => ({
      nameDestiny: travel.route.name,
      nameOrigin: travel.route.name,
      dateOfDeparture: travel.departureDate.toString(),
      value: travel.getValueBetweenStops('1', '2'),
      driver: travel.driver.name,
      vehicle: {
        classification: travel.classificationVehicle,
      },
      quantity: travel.getQuantitySeatsBetweenStops('1', '2'),
    }));
  }
}
