import { ICreateRoute } from '@/domain/usecases/routes/CreateRoutes';
import { ICreateRouteProtocolRepository } from '@/infra/protocols/route/CreateRouteProtocolRepository';

export class CreateRouteUseCase implements ICreateRoute {
  constructor(private readonly CreateRoute: ICreateRouteProtocolRepository) {}
  async execute(data: ICreateRoute.Params): Promise<ICreateRoute.Result> {
    return this.CreateRoute.create(data);
  }
}
