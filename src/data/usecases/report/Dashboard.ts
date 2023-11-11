import { IDashboardUseCase } from '@/domain/usecases/dashboard/DashboardInterface';
import { RouteRepository } from '@/infra/RouteRepository';
import { TravelRepository } from '@/infra/TravelRepository';
import { VehicleRepository } from '@/infra/VehicleRepository';

export class DashboardUseCase  implements IDashboardUseCase{
  constructor(
    private readonly routeRepository: RouteRepository,
    private readonly travelRepository: TravelRepository,
    private readonly vehiclesRepository: VehicleRepository,
  ) {}
  async execute(): Promise<IDashboardUseCase.result> {
    const countRoutes = await this.routeRepository.getCountAll();
    const countVehicle = await this.vehiclesRepository.countAll();
    return {
      countRoutes,
      countVehicle,

    };
  }
}
