import { IDisableRouteUseCase } from '@/data/protocols/usecases/routes/DisableRoutes';
import { IRouteRepository } from '@/infra/protocols/route';
import { ITravelProtocolRepository } from '@/infra/protocols/travel';

export class DisableRouteUseCase implements IDisableRouteUseCase {
  constructor(
    private readonly routeRepository: IRouteRepository,
    private readonly travelRepository: ITravelProtocolRepository,
  ) {}
  async execute(idRouter: string): Promise<Boolean> {
    const route = await this.routeRepository.getById({ id: idRouter });

    if (!route) {
      throw new Error('Parece que a rota que não existe');
    }

    if (route.disabled) {
      const result = await this.routeRepository.update({
        ...route,
        disabled: false,
      });
      if (result.disabled !== false)
        throw new Error('Parece que a rota não foi desabilitada');
      return true;
    }

    const travels = await this.travelRepository.findByIdRoute(route.id);
    travels.forEach(travel => {
      if (travel.status === 'ABERTA' || travel.status === 'EM_ANDAMENTO')
        throw new Error(
          'Parece que a rota não pode ser desabilitada pois possuem viagens em andamento ou abertas',
        );
    });

    const result = await this.routeRepository.update({
      ...route,
      disabled: true,
    })

    return true;
  }
}
