import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { Travel } from '@/domain/entity/Travel/Travel';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IGetByIdRouteProtocolRepository } from '@/infra/protocols/route/GetByIdRouteProtocolRepository';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';
import { ICreateTripStopsProtocolRepository } from '@/infra/protocols/tripStops/CreateTripStopsProtocolRepository';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';
import { PricesBetweenStops, TripStops } from '@prisma/client';
import { v4 } from 'uuid';
export class CreateTravels implements ICreateTravels {
  constructor(
    private readonly travelRepository: ITravelProtocolRepository,
    private readonly createTripStops: ICreateTripStopsProtocolRepository,
    private readonly routesRepository: IGetByIdRouteProtocolRepository,
    private readonly userRepository: IUserProtocolRepository,
    private readonly vehicleRepository: IVehicleProtocolRepository,
  ) {}
  async execute(data: ICreateTravels.Params): Promise<any> {
    const route = await this.routesRepository.getById({ id: data.routeId });

    if (!route.id) throw new Error('Rota não encontrada');


    const vehicle = await this.vehicleRepository.getById(data.idVehicle);


    const travel = new Travel(
      v4(),
      data.description,
      data.routeId,
      data.,
      data.driverId,
      data.departureDate,
    );

    await this.travelRepository.create({
      arrivalDate: data.arrivalDate,
      departureDate: data.departureDate,
      description: data.description,
      driverId: data.driverId,
      idVehicle: data.idVehicle,
      routeId: data.routeId,
    });
  }
}
