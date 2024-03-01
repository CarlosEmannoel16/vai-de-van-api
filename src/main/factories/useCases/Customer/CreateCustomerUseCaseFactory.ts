import { CreateCustomerUseCase } from '@/data/usecases/customer/CreateCustomer';
import { CustomerRepository } from '@/infra/CustomerRepository';
import { makeCreateCustomerValidate } from './validation/CreateCustomerValidation';
import { ICreateCustomerUseCaseProtocol } from '@/data/protocols/usecases/customer/CreateCustomerUseCaseProtocol';
import { EmailService } from '@/infra/SendEmailService';
import { ConfirmEmailRepository } from '@/infra/ConfirmEmailRepository';

export const makeCreateCustomerUseCase = (): ICreateCustomerUseCaseProtocol => {
  const customerRepository = new CustomerRepository();
  const validateCustomer = makeCreateCustomerValidate();
  const sendEmail = new EmailService();
  const confirmEmailRepository = new ConfirmEmailRepository();
  return new CreateCustomerUseCase(
    customerRepository,
    validateCustomer,
    sendEmail,
    confirmEmailRepository,
  );
};
