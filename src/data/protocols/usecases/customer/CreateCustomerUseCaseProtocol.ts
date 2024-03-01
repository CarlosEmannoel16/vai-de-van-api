import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';

export interface ICreateCustomerUseCaseProtocol {
  execute(
    data: ICreateCustomerUseCaseProtocol.Params,
  ): Promise<CustomerInterface>;
}

export namespace ICreateCustomerUseCaseProtocol {
  export type Params = {
    name: string;
    email: string;
    password: string;
    cpf: string;
    dateOfBirth: Date;
    phone: string;
  };
}
