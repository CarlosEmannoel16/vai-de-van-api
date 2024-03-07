import { ICreateRouteUseCase } from '@/data/protocols/usecases/routes/CreateRoutes';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { TripStopFactory } from '@/domain/TripStop/factory/TripStopFactory';
import { ICreateRouteProtocolRepository } from '@/domain/Route/repository/CreateRouteProtocolRepository';
import { IStopProtocolRepository } from '@/infra/protocols/stops/StopProtocolRepository';

export class CreateRouteUseCase implements ICreateRouteUseCase {
  constructor(
    private readonly CreateRoute: ICreateRouteProtocolRepository,
    private readonly stopRepository: IStopProtocolRepository,
  ) {}
  async execute(
    data: ICreateRouteUseCase.Params,
  ): Promise<ICreateRouteUseCase.Result> {
    const result = await this.stopRepository.getByIds(
      data.TripStops.map(ts => ts.stopId),
    );

    if (data.TripStops.length !== result.length) {
      throw new Error('Some stops were not found');
    }

    const route = RouteFactory.create({
      km: data.km,
      kmValue: data.kmValue,
      name: data.name,
    });

    const tripStops = data.TripStops.map(tripStop => {
      const stop = result.find(stop => stop.id === tripStop.stopId);

      return TripStopFactory.create({
        distanceFromLast: tripStop.distanceFromLast,
        tripStopOrder: tripStop.stopOrder,
        stop,
        isFinalStop: tripStop.isFinalStop,
        isInitialStop: tripStop.isInitialStop,
      });
    });

    route.addTripStop(tripStops);

    await this.CreateRoute.create(route);
    return {
      id: route.id,
      name: route.name,
    };
  }
}
