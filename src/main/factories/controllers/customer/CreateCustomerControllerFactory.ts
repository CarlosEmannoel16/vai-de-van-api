import { CreateCustomerController } from '@/presentation/controller/customer/CreateCustomerController';
import { makeCreateCustomerUseCase } from '../../useCases/Customer/CreateCustomerUseCaseFactory';

export const makeCreateCustomerController = () => {
  return new CreateCustomerController(makeCreateCustomerUseCase());
};
