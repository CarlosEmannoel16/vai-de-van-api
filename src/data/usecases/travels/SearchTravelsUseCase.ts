import { ISearchTravelsUseCaseProtocol } from '@/data/protocols/usecases/travels/SearchTravels';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';


export class SearchTravelsUseCase implements ISearchTravelsUseCaseProtocol {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}

  async execute(
    data: ISearchTravelsUseCaseProtocol.Params,
  ): Promise<ISearchTravelsUseCaseProtocol.Result[] | undefined> {
    console.log(data);
    const tripStops = await this.travelRepository.search(data);
    console.log(tripStops);
    const result: ISearchTravelsUseCaseProtocol.Result[] = [];
    tripStops.forEach(travel => {
     result.push({
      dateOfDeparture: travel.departureDate,
      driver: travel.Driver.User.name,
      vehicle: travel.Vechicle.description,
      nameDestiny: travel.Route.Destiny.name,
      nameOrigin: travel.Route.Origin.name,
      value: travel.Route.TripStops.map(ts => {
        const value = ts.PricesBetweenStops.filter(p => {
          return (p.idDestiny === data.destiny) && (p.id === data.origin)
        })
        return value[0].price
      })[0],
      quantity: 1

     })
    });

    // tripStops.forEach(travel => {
    //   let value = 0;
    //   let nameDestiny = '';
    //   let nameOrigin = '';
    //   let amount_of_accents_free = travel.Vechicle.amount_of_accents;
    //   let accentsTotal = travel.Vechicle.amount_of_accents;
    //   let tripStopDestiny;
    //   let ticketsSales
    //   // travel.TripStops.forEach(ts => {
    //   //   //Pega a Parada correta
    //   //   if (ts.City.id === data.origin && !value) {
    //   //     const orderOrigin = ts.tripStopOrder;
    //   //     if(travel.Tickets.length > 0) {
    //   //     if (orderOrigin === 0) {
    //   //       ticketsSales = travel.Tickets.length;
    //   //       amount_of_accents_free = accentsTotal - ticketsSales;
    //   //     } else {
    //   //       travel.TripStops.forEach(tsDestiny => {
    //   //         if (
    //   //           tsDestiny.City.id === data.destiny &&
    //   //           tsDestiny.tripStopOrder > orderOrigin
    //   //         ) {
    //   //           travel.Tickets.forEach(ticketsToOrigin => {
    //   //             if (
    //   //               ticketsToOrigin.PricesBetweenStops.TripStops.tripStopOrder >
    //   //               orderOrigin
    //   //             ) {
    //   //               ticketsSales+=1
    //   //             }
    //   //           });
    //   //         }
    //   //       });
    //   //       amount_of_accents_free = accentsTotal - ticketsSales;
    //   //     }
    //   //   }else{
    //   //     amount_of_accents_free = accentsTotal
    //   //   }

    //   //     nameOrigin = ts.City.name;
    //   //     return ts.PricesBetweenStops.forEach(p => {
    //   //       if (p.idDestiny === data.destiny && !value) {
    //   //         value = p.price;
    //   //         nameDestiny = p.City.name;
    //   //       }
    //   //     });
    //   //   }
    //   // });
    //   if (nameDestiny || nameDestiny !== '')
    //     result.push({
    //       driver: travel.Driver.User.name,
    //       vehicle: travel.Vechicle.description,
    //       dateOfDeparture: travel.departureDate,
    //       nameOrigin,
    //       nameDestiny: nameDestiny,
    //       value: value,
    //       quantity: amount_of_accents_free,
    //     });
    // });

    console.log(result);
    return result;
  }
}
