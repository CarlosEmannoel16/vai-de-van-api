import { v4 } from 'uuid';
import PersonFactory from '../factory/PersonFactory';
import { CustomerInterface } from '../protocols/CustomerInterface';
import { DriverInterface } from '../protocols/DriverInterface';
import { UserInterface } from '../protocols/UserInterface';

export interface ICustomerAdapter {
  createCustomer(data: DriverInterface | UserInterface): CustomerInterface;
}

export class CustomerAdapter implements ICustomerAdapter {

  private customer: CustomerInterface;

  createCustomer(data: DriverInterface | UserInterface): CustomerInterface {
    return PersonFactory.customer({
      cpf: data.cpf,
      email: data.email,
      name: data.name,
      password: data.password,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      id: v4(),
    });
  }
}
