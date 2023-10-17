import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import { BaseError } from '@/data/errors/baseError';
import { ICreateTravels } from '@/domain/usecases/travels/CreateTravels';
import { IGetAllCitiesRepository } from '@/infra/protocols/city/GetAllCitiesRepository';
import { IGetCityRepository } from '@/infra/protocols/city/GetCityRepository';
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
    private readonly cityRepository: IGetCityRepository,
  ) {}
  async execute(data: ICreateTravels.Params): Promise<any> {
    const route = await this.routesRepository.getById({ id: data.routeId });

    if (!route.id) throw new Error('Rota não encontrada');



    await this.travelRepository.create({
      arrivalDate: data.arrivalDate,
      departureDate: data.departureDate,
      description: data.description,
      driverId: data.driverId,
      idVehicle: data.idVehicle,
      routeId: data.routeId,
      tripStops: data.tripStops,
    });
  }
}
