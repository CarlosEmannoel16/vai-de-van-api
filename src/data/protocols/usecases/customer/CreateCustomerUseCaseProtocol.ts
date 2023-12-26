import { Customer } from '@/domain/Customer/entity/Customer';

export interface ICreateCustomerUseCaseProtocol {
  execute(data: Customer): Promise<Customer>;
}
