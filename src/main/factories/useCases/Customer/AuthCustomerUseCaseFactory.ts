import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { AuthCustomerUseCase } from '@/data/usecases/customer/AuthCustomer';
import { CustomerPrismaRepository } from '@/infra/CustomerRepository';
import { EmailService } from '@/infra/SendEmailService';

export const makeAuthCustomerUseCase = (): IAuthCustomerProtocolUseCase => {
  const emailService = new EmailService();

  return new AuthCustomerUseCase(new CustomerPrismaRepository(), emailService);
};
