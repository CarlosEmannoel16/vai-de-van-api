import { GetAllStopsUseCase } from '@/data/usecases/stops/GetAllStopsUseCase';
import { StopRepository } from '@/infra/StopRepository';

export const makeGetAllStopsUseCase = () => {
  return new GetAllStopsUseCase(new StopRepository());
};
