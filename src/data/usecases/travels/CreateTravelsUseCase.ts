import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import { BaseError } from '@/data/errors/baseError';
import { ICreateTravels } from '@/domain/usecases/travels/CreateTravels';
import { IGetAllCitiesRepository } from '@/infra/protocols/city/getAllCitisRepository';
import { IGetByIdRouteProtocolRepository } from '@/infra/protocols/route/GetByIdRouteProtocolRepository';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';
import { ICreateTripStopsProtocolRepository } from '@/infra/protocols/tripStops/CreateTripStopsProtocolRepository';
import { PricesBetweenStops, TripStops } from '@prisma/client';
import { v4 } from 'uuid';
export class CreateTravels implements ICreateTravels {
  constructor(
    private readonly travelRepository: ITravelProtocolRepository,
    private readonly createTripStops: ICreateTripStopsProtocolRepository,
    private readonly routesRepository: IGetByIdRouteProtocolRepository,
    private readonly cityRepository: IGetAllCitiesRepository,
  ) {}
  async execute(data: ICreateTravels.Params): Promise<any> {
    const route = await this.routesRepository.getById({ id: data.routeId });
    if (!route)
      throw new InvalidGenericError(
        'Parece que esta rota nao está mais disponivel 😅',
      );
    const citiesName = [];
    data.tripStops.forEach(async tripStop => {
      if (citiesName.includes(tripStop.name)) {
        throw new InvalidGenericError(
          'Ocorreu um erro no cadastro de paradas Voce nao pode cadastrar duas paradas com cidades iguais: ' +
            tripStop.name,
        );
      } else {
        citiesName.push(tripStop.name);
      }
    });

    const resultTravel = await this.travelRepository.create({
      ...data,
      description: data.description,
      arrivalDate: new Date(data.arrivalDate),
      departureDate: new Date(data.departureDate),
    });

    const kmTotal = Number(route.km);

    let km = 0;
    data.tripStops.forEach(async tripStop => {
      if(tripStop.tripStopOrder !== 0 && tripStop.tripStopOrder !== 999 ){
       km +=  Number(tripStop.distanceFromLastStop) 
      }


      if(tripStop.tripStopOrder === 999) {
      if(km >= kmTotal) throw new InvalidGenericError('A soma das paradas deve ser igual a km total da rota')
       km +=  (kmTotal - km)
      }
      if(km > kmTotal) throw new InvalidGenericError('A soma das paradas deve ser igual a km total da rota')

    });




    let kmResponse = 0;
    data.tripStops.map(tripStop => {
      if (tripStop.distanceFromLastStop)
        kmResponse = Number(tripStop?.distanceFromLastStop) + kmResponse;
    });

    let distanciaTotal = route.km;
    let value = 0;
    const DTOTripStops: TripStops[] = [];
    const DTOPricesBetweenStops: PricesBetweenStops[] = [];

    data.tripStops.forEach((tripStopOrigin, index) => {
      distanciaTotal =
        Number(distanciaTotal) -
        Number(tripStopOrigin.distanceFromLastStop || 0);
      const idTripStop = v4();
      DTOTripStops.push({
        cityid: tripStopOrigin.cityIdFromTo,
        travelId: resultTravel.id,
        created_at: new Date(),
        tripStopOrder: tripStopOrigin.tripStopOrder || index,
        update_at: new Date(),
        id: idTripStop,
        distanceFromLastStop: Number(tripStopOrigin.distanceFromLastStop)

      });
      value = 0
      data.tripStops.forEach(tripStopDestiny => {
        
        if (
          tripStopOrigin.name === tripStopDestiny.name ||
          tripStopDestiny.tripStopOrder < tripStopOrigin.tripStopOrder
        )
          return;

          const lastTripstopKmValue = value

          value = value + Number(tripStopDestiny.distanceFromLastStop || distanciaTotal)
       
          if(tripStopDestiny.tripStopOrder === 999) value = value - lastTripstopKmValue
  
        DTOPricesBetweenStops.push({
          idDestiny: tripStopDestiny.cityIdFromTo,
          price: value * Number(route.kmValue),
          id: v4(),
          tripStopId: idTripStop,
        });
      });
    });

    await this.createTripStops.createMany(DTOTripStops, DTOPricesBetweenStops);

    return;
  }
}
