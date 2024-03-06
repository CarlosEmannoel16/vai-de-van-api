import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { AuthCustomerUseCase } from '@/data/usecases/customer/AuthCustomer';
import { CustomerRepository } from '@/infra/CustomerRepository';
import { EmailService } from '@/infra/SendEmailService';

export const makeAuthCustomerUseCase = (): IAuthCustomerProtocolUseCase => {
  const emailService = new EmailService();

  return new AuthCustomerUseCase(new CustomerRepository(), emailService);
};
