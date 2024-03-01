import { ICreateCustomerUseCaseProtocol } from '@/data/protocols/usecases/customer/CreateCustomerUseCaseProtocol';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';
import { IValidatorCreateCustomer } from '@/data/protocols/usecases/customer/actions/ValidatorCreateCustomerProtocol';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { ISendEmail } from '@/infra/protocols/email/SendEmail';
import { IConfirmEmailRepositoryProtocol } from '@/infra/protocols/confirmEmail/ConfirmEmailRepository';

export class CreateCustomerUseCase implements ICreateCustomerUseCaseProtocol {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
    private readonly validateCustomer: IValidatorCreateCustomer,
    private readonly sendEmail: ISendEmail,
    private readonly confirmEmailRepository: IConfirmEmailRepositoryProtocol,
  ) {}

  async execute(
    data: ICreateCustomerUseCaseProtocol.Params,
  ): Promise<CustomerInterface> {
    await this.validateCustomer.validate({
      cpf: data.cpf,
      email: data.email,
      name: data.name,
      password: data.password,
      phone: data.phone,
    });
    console.log('passou');

    console.log(data);

    const customer = PersonFactory.customer({
      cpf: data.cpf,
      email: data.email,
      name: data.name,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
      phone: data.phone,
    });

    customer.emailConfirm = false;

    await this.customerRepository.create(customer);

    const code = Math.floor(Math.random() * 1000000).toString();

    await this.sendEmail.send({
      message: `Email de confirmação, Vai de van  ${code}`,
      subject: 'Confirmação de email',
      to: customer.email,
    });

    await this.confirmEmailRepository.createPendingCode(customer, code);

    return customer;
  }
}
