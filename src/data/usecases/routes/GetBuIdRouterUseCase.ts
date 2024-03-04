import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import { IGetByIdRoutes } from '@/data/protocols/usecases/routes/GetByIdRoutes';
import { IGetByIdRouteProtocolRepository } from '@/domain/Route/repository/GetByIdRouteProtocolRepository';

export class GetByIdRouterUseCase {
  constructor(private readonly getByIdRoute: IGetByIdRouteProtocolRepository) {}
  async execute(data: IGetByIdRoutes.Params): Promise<IGetByIdRoutes.Result> {
    if (!data.id) throw new InvalidGenericError('Id é obrigatório');
    const route = await this.getByIdRoute.getById(data.id);
    if (!route) throw new InvalidGenericError('Routa não encontrado');
    return {
      id: route.id,
      km: route.km,
      kmValue: route.KmValueInReal,
      name: route.name,
    };
  }
}
