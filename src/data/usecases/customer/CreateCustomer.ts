import { ICreateCustomerUseCaseProtocol } from '@/data/protocols/usecases/customer/CreateCustomerUseCaseProtocol';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';

export class CreateCustomerUseCase implements ICreateCustomerUseCaseProtocol {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  async execute(
    data: ICreateCustomerUseCaseProtocol.Params,
  ): Promise<CustomerInterface> {
    throw new Error('Method not implemented.');
  }
}
