import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { Travel } from '@/domain/Travel/entity/Travel';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IGetByIdRouteProtocolRepository } from '@/infra/protocols/route/GetByIdRouteProtocolRepository';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';
import { ICreateTripStopsProtocolRepository } from '@/infra/protocols/tripStops/CreateTripStopsProtocolRepository';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';
import { v4 } from 'uuid';
import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
export class CreateTravels implements ICreateTravels {
  constructor(
    private readonly travelRepository: ITravelProtocolRepository,
    private readonly createTripStops: ICreateTripStopsProtocolRepository,
    private readonly routesRepository: IGetByIdRouteProtocolRepository,
    private readonly userRepository: IUserProtocolRepository,
    private readonly vehicleRepository: IVehicleProtocolRepository,
  ) {}
  async execute(data: ICreateTravels.Params): Promise<any> {
    const route = await this.routesRepository.getById(data.routeId );
    if (!route) throw new Error('Rota não encontrada');

    const vehicle = await this.vehicleRepository.getById(data.idVehicle);
    if (!vehicle) throw new Error('Veículo não encontrado');

    const driver = await this.userRepository.getDriverById(data.driverId);

    const travel = TravelFactory.createTravel({
      arrivalDate: data.arrivalDate,
      departureDate: data.departureDate,
      name: data.description,
      vehicle,
      driver,
      route,
      id: v4(),
    });

    await this.travelRepository.create(travel);
  }
}
