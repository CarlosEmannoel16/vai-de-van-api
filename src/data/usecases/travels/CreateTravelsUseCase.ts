import { ICreateTravels } from '@/data/protocols/usecases/travels/CreateTravels';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IGetByIdRouteProtocolRepository } from '@/domain/Route/repository/GetByIdRouteProtocolRepository';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';
import { v4 } from 'uuid';
import { TravelFactory } from '@/domain/Travel/factory/TravelFactory';
import { IFindDriverByIdProtocolRepository } from '@/domain/Driver/repositories/GetDriverByIdProtocolRepository';
export class CreateTravels implements ICreateTravels {
  constructor(
    private readonly travelRepository: ITravelProtocolRepository,
    private readonly routesRepository: IGetByIdRouteProtocolRepository,
    private readonly driverById: IFindDriverByIdProtocolRepository,
    private readonly vehicleRepository: IVehicleProtocolRepository,
  ) {}
  async execute(data: ICreateTravels.Params): Promise<any> {
    const route = await this.routesRepository.getById(data.routeId);
    if (!route) throw new Error('Rota não encontrada');

    const vehicle = await this.vehicleRepository.getById(data.idVehicle);

    if (!vehicle) throw new Error('Veículo não encontrado');

    const driver = await this.driverById.findById(data.driverId);
    if (!driver) throw new Error('Motorista não encontrado');

    const travel = TravelFactory.createTravel({
      arrivalDate: new Date(data.arrivalDate),
      departureDate: new Date(data.departureDate),
      name: data.description || 'Viagem sem nome',
      vehicle,
      description: data.description,
      driver,
      status: 'ABERTA',
      route,
      id: v4(),
    });

    await this.travelRepository.create(travel);
  }
}
