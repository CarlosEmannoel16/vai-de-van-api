import { Messages } from '@/data/language';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';

export interface IValidatorCustomerProtocol {
  validate(data: IValidatorCustomerProtocol.Params): Promise<any>;
  setNext(next: IValidatorCustomerProtocol): IValidatorCustomerProtocol;
}

export namespace IValidatorCustomerProtocol {
  export type Params = {
    name: string;
    email: string;
    password: string;
    cpf: string;
  };
}

class ValidateEmail implements IValidatorCustomerProtocol {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  private next: IValidatorCustomerProtocol;

  async validate(
    data: IValidatorCustomerProtocol.Params,
  ): Promise<CustomerInterface> {
    const user = await this.customerRepository.findByEmail(data.email);
    if (user) throw new Error(Messages.customer.emailAlreadyExists);

    return this.next.validate(data);
  }
  setNext(next: IValidatorCustomerProtocol): IValidatorCustomerProtocol {
    this.next = next;
    return next;
  }
}

class ValidateCPF implements IValidatorCustomerProtocol {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  private next: IValidatorCustomerProtocol;

  async validate(
    data: IValidatorCustomerProtocol.Params,
  ): Promise<CustomerInterface> {
    const user = await this.customerRepository.findByCpf(data.cpf);
    if (user) throw new Error(Messages.customer.emailAlreadyExists);

    return this.next.validate(data);
  }
  setNext(next: IValidatorCustomerProtocol): IValidatorCustomerProtocol {
    this.next = next;
    return next;
  }
}

class ValidateCreateCustomer {
  constructor(
    private readonly validateEmail: IValidatorCustomerProtocol,
    private readonly validateCPF: IValidatorCustomerProtocol,
  ) {}

  async validate(data: IValidatorCustomerProtocol.Params): Promise<any> {
    this.validateCPF.setNext(this.validateEmail);
    await this.validateCPF.validate(data);
  }
}
