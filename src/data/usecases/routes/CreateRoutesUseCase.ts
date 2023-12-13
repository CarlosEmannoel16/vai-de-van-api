import { ICreateRouteUseCase } from '@/data/protocols/usecases/routes/CreateRoutes';
import { RouteFactories } from '@/domain/entity/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/entity/Route/factories/TripStopFactory';
import { ICreateRouteProtocolRepository } from '@/infra/protocols/route/CreateRouteProtocolRepository';

export class CreateRouteUseCase implements ICreateRouteUseCase {
  constructor(private readonly CreateRoute: ICreateRouteProtocolRepository) {}
  async execute(
    data: ICreateRouteUseCase.Params,
  ): Promise<ICreateRouteUseCase.Result> {
    const route = RouteFactories.create({
      km: data.km,
      kmValue: data.kmValue,
      name: data.name,
    });

    if (data.TripStops.length) {
      data.TripStops.forEach(tripStop => {
        const tripStopCreated = TripStopFactory.create({
          cityId: tripStop.cityId,
          distanceFromLast: tripStop.distanceFromLast,
          routeId: route.Id,
          tripStopOrder: tripStop.tripStopOrder,
        });
        tripStop.pricesBetweenStops.forEach(price => {
          tripStopCreated.setPricesBetweenStops(price);
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
      id: route.Id,
      name: route.Name,
    };
  }
}
