import { Customer } from '../entity/Customer';
import { Driver } from '../entity/Driver';
import { User } from '../entity/User';
import { CustomerInterface } from '../protocols/CustomerInterface';
import { DriverInterface } from '../protocols/DriverInterface';
import PersonInterface from '../protocols/PersonInterface';

type PersonType = 'driver' | 'customer' | 'admin';
interface PersonProps {
  type: PersonType;
  id: string;
  name: string;
  email: string;
  cpf: string;
  cnh?: string;
  password?: string;
  dateOfBirth?: Date;
  phone?: string;
}

export class PersonFactory {
  static create({
    type,
    id,
    name,
    email,
    cpf,
    cnh,
    dateOfBirth,
    password,
    phone,
  }: PersonProps): PersonInterface | DriverInterface | CustomerInterface {
    switch (type) {
      case 'driver':
        return new Driver(id, name, email, password, cpf, dateOfBirth, cnh);
      case 'customer':
        return new Customer(id, name, email, cpf, password);
      case 'admin':
        return new User(id, name, email, password, cpf, phone, dateOfBirth);
      default:
        throw new Error('Invalid person type');
    }
  }
}
