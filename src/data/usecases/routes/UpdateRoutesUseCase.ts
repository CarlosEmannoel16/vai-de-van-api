import { IUpdateRoute } from '@/data/protocols/usecases/routes/UpdateRoutes';
import { RouteFactory } from '@/domain/Route/factories/RouteFactories';
import { RouterInterface } from '@/domain/Route/interface/RouteInterface';
import { IUpdateRouteProtocolRepository } from '@/domain/Route/repository/UpdateRouteProtocolRepository';

export class UpdateRouteUseCase implements IUpdateRoute {
  constructor(private readonly updateRoute: IUpdateRouteProtocolRepository) {}
  async execute(data: IUpdateRoute.Params): Promise<RouterInterface> {
    const route = RouteFactory.create({
      km: data.km,
      kmValue: data.kmValue,
      name: data.name,
      id: data.id,
    });
    await this.updateRoute.update(route);
    return route;
  }
}
