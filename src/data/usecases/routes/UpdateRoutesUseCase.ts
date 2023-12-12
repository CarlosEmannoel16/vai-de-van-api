import { IUpdateRoute } from '@/data/protocols/usecases/routes/UpdateRoutes';
import { IUpdateRouteProtocolRepository } from '@/infra/protocols/route/UpdateRouteProtocolRepository';
import { Route } from '@prisma/client';

export class UpdateRouteUseCase implements IUpdateRoute {
  constructor(private readonly updateRoute: IUpdateRouteProtocolRepository) {}
  async execute(data: Route): Promise<Route> {

    const route = await this.updateRoute.update({...data});
    return route;
  }
}
