import { IFindVehicleAvailableByRouteUseCase } from '@/data/protocols/usecases/vechicle/FindVehicleAvailableByRouteUseCase';

export class FindVehicleAvailableByRoute
  implements IFindVehicleAvailableByRouteUseCase
{
  execute(
    routeId: string,
  ): Promise<IFindVehicleAvailableByRouteUseCase.Result[]> {
    throw new Error('Method not implemented.');
  }
}
