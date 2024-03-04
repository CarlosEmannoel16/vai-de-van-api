import { AuthCustomerController } from '@/presentation/controller/customer/AuthCustomerController';
import { makeAuthCustomerUseCase } from '../../useCases/Customer/AuthCustomerUseCaseFactory';
import { IController } from '@/presentation/protocols/IController';

export const makeAuthCustomerController = (): IController => {
  return new AuthCustomerController(makeAuthCustomerUseCase());
};
