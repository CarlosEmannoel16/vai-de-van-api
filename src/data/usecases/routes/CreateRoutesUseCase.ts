import { ICreateRouteUseCase } from '@/data/protocols/usecases/routes/CreateRoutes';
import {  RouteFactory} from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { ICreateRouteProtocolRepository } from '@/infra/protocols/route/CreateRouteProtocolRepository';

export class CreateRouteUseCase implements ICreateRouteUseCase {
  constructor(private readonly CreateRoute: ICreateRouteProtocolRepository) {}
  async execute(
    data: ICreateRouteUseCase.Params,
  ): Promise<ICreateRouteUseCase.Result> {

    const route = RouteFactory.create({
      km: data.km,
      kmValue: data.kmValue,
      name: data.name,
    });

    if (data.TripStops.length) {
      data.TripStops.forEach(tripStop => {
        const tripStopCreated = TripStopFactory.create({
          cityId: tripStop.cityId,
          distanceFromLast: tripStop.distanceFromLast,
          tripStopOrder: tripStop.tripStopOrder,
          cityName: '-',
        });

        if (tripStop.initialStop) {
          tripStopCreated.setInitialStop();
        }
        if (tripStop.finalStop) {
          tripStopCreated.setFinalStop();
        }

        route.addStop(tripStopCreated);
      });
    }

    await this.CreateRoute.create(route);
    return {
      id: route.id,
      name: route.name,
    };
  }
}
