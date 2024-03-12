import { GetAllStopsController } from '@/presentation/controller/stop/GetAllStopsController';
import { makeGetAllStopsUseCase } from '../../useCases/Stop/GetStopsUseCaseFactory';
import { IController } from '@/presentation/protocols/IController';

export const makeGetAllStopsController = (): IController => {
  return new GetAllStopsController(makeGetAllStopsUseCase());
};
