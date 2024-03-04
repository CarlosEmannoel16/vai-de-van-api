import { CreateRouteUseCase } from '@/data/usecases/routes/CreateRoutesUseCase';
import { RouteRepository } from '@/infra/RouteRepository';
import { StopRepository } from '@/infra/StopRepository';

export const makeCreateRouteUseCase = () => {
  return new CreateRouteUseCase(new RouteRepository(), new StopRepository());
};
