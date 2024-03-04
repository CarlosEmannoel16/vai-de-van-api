import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { IAuthCustomerProtocolUseCase } from '@/data/protocols/usecases/customer/AuthCustomerUseCaseProtocol';
import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';

export class AuthCustomerUseCase implements IAuthCustomerProtocolUseCase {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}
  async handler(
    email: string,
    password: string,
  ): Promise<IAuthCustomerProtocolUseCase.Result> {
    if (!email || !password)
      throw new InvalidParamsError('Invalid credentials');

    const customer = await this.customerRepository.findByEmail(email);
    console.log(customer);

    if (!customer) {
      throw new Error('Invalid credentials');
    }

    const passwordMatch = customer.password === password;

    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      dateOfBirth: customer.dateOfBirth,
      phone: customer.phone,
    };
  }
}
