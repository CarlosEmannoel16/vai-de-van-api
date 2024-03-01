import { GetAllStopsController } from '@/presentation/controller/stop/GetAllStopsController';
import { makeGetAllStopsUseCase } from '../../useCases/Stop/GetStopsUseCaseFactory';

export const makeGetAllStopsController = () => {
  return new GetAllStopsController(makeGetAllStopsUseCase());
};
