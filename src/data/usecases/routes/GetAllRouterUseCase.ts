import { IGetAllRoutes } from '@/data/protocols/usecases/routes/GetAllRoutes';
import { Route } from '@/domain/Route/entity/Route';
import { IGetAllRouteProtocolRepository } from '@/domain/Route/repository/GetAllRouteProtocolRepository';

export class GetAllRoutesUseCase implements IGetAllRoutes {
  constructor(private readonly getAllRoutes: IGetAllRouteProtocolRepository) {}

  async execute(): Promise<IGetAllRoutes.Result[]> {

    const routes = await this.getAllRoutes.getAll();

    const output = routes.map(route => {
      return {
        id: route.id,
        km: route.km,
        kmValue: route.kmValue,
        name: route.name,
        tripStops: route?.tripStops?.map(tripStop => {
          return {
            idCity: tripStop.stop.id,
            nameCity: tripStop.stop.name,
            distanceLastStop: tripStop.distanceFromLast,
            isInitialStop: tripStop.isInitialStop,
            isFinalStop: tripStop.isFinalStop,
          };
        }),
      };
    });

    return output;
  }
}
