import { IValidatorCreateCustomer } from '@/data/protocols/usecases/customer/actions/ValidatorCreateCustomerProtocol';

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
    phone: string;
  };
}

export class ValidateCreateCustomer implements IValidatorCreateCustomer {
  constructor(
    private readonly validateEmail: IValidatorCustomerProtocol,
    private readonly validateCPF: IValidatorCustomerProtocol,
    private readonly validatePhone: IValidatorCustomerProtocol,
  ) {}

  async validate(data: IValidatorCustomerProtocol.Params): Promise<any> {
    this.validateCPF.setNext(this.validateEmail);
    this.validateEmail.setNext(this.validatePhone);
    await this.validateCPF.validate(data);
  }
}
