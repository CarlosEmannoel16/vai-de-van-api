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
    const result: ISearchTravelsUseCaseProtocol.Result[] = tripStops.map(
      (travel): ISearchTravelsUseCaseProtocol.Result => {
        let value = 0
        let nameDestiny = ''
        travel.TripStops.forEach(ts => {
          if (ts.City.id === data.origin && !value) {
            return ts.PricesBetweenStops.forEach(p => {
             
              if (p.idDestiny === data.destiny && !value) {
                console.log('____===>', p);
                value = p.price;
                nameDestiny = p.City.name
              }
            });
          }
        });
        return {
          driver: travel.Driver.User.name,
          vehicle: travel.Vechicle.description,
          dateOfDeparture: travel.departureDate,
          nameOrigin: travel.TripStops[0].City.name,
          nameDestiny: nameDestiny,
          value: value,
        };
      },
    );
    return result;
  }
}
