import { ICreateRouteUseCase } from '@/domain/usecases/routes/CreateRoutes';
import { ICreateRouteProtocolRepository } from '@/infra/protocols/route/CreateRouteProtocolRepository';

export class CreateRouteUseCase implements ICreateRouteUseCase {
  constructor(private readonly CreateRoute: ICreateRouteProtocolRepository) {}
  async execute(data: ICreateRouteUseCase.Params): Promise<ICreateRouteUseCase.Result> {

    return this.CreateRoute.create({...data, kmValue: data.kmValue, km: Number(data.km)});
  }
}
