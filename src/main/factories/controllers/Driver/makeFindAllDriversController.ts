import { GetAllDriversController } from '@/presentation/controller/driver/GetAllDriversController';
import { makeGetAllDriversUseCase } from '../../useCases/Driver/makeGetAllDriversUseCase';
import { IController } from '@/presentation/protocols/IController';

export const makeFindAllDriversController = (): IController => {
  return new GetAllDriversController(makeGetAllDriversUseCase());
};
