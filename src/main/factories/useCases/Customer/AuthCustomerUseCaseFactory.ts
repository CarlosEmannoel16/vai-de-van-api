import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { AuthCustomerUseCase } from '@/data/usecases/customer/AuthCustomer';
import { CustomerRepository } from '@/infra/CustomerRepository';

export const makeAuthCustomerUseCase = (): IAuthCustomerProtocolUseCase => {
  return new AuthCustomerUseCase(new CustomerRepository());
};
