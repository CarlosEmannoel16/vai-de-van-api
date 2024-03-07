import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';
import { ISendEmail, SendEmail } from '@/infra/protocols/email/SendEmail';

export class AuthCustomerUseCase implements IAuthCustomerProtocolUseCase {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
    private readonly sendEmail: ISendEmail,
  ) {}
  async handler(
    email: string,
    password: string,
  ): Promise<IAuthCustomerProtocolUseCase.Result> {
    if (!email || !password)
      throw new InvalidParamsError('Invalid credentials');

    const customer = await this.customerRepository.findByEmail(email);

    if (!customer) {
      throw new Error('Invalid credentials');
    }

    const passwordMatch = customer.password === password;

    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    this.sendEmail.send({
      message: 'Novo login realizado na sua conta vai de van!',
      subject: 'Novo Login',
      to: customer.email,
    });

    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      dateOfBirth: customer.dateOfBirth,
      phone: customer.phone,
      emailIsConfirmed: customer.emailConfirm,
    };
  }
}
