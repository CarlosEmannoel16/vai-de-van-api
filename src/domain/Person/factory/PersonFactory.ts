import { Customer } from '../entity/Customer';
import { Driver } from '../entity/Driver';
import { User } from '../entity/User';
import { CustomerInterface } from '../protocols/CustomerInterface';
import { DriverInterface } from '../protocols/DriverInterface';
import PersonInterface from '../protocols/PersonInterface';
import { UserInterface } from '../protocols/UserInterface';

type PersonType = 'driver' | 'customer' | 'admin';
interface PersonProps {
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
  static create(
    personType: PersonType,
    { id, name, email, cpf, cnh, dateOfBirth, password, phone }: PersonProps,
  ): PersonInterface | DriverInterface | CustomerInterface | UserInterface {
    switch (personType) {
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

  static createMany(
    personType: PersonType,
    data: PersonProps[],
  ): PersonInterface[] | DriverInterface[] | CustomerInterface[] {
    switch (personType) {
      case 'driver':
        return data.map(
          p =>
            new Driver(
              p.id,
              p.name,
              p.email,
              p.password,
              p.cpf,
              p.dateOfBirth,
              p.cnh,
            ),
        );
      case 'customer':
        return data.map(
          p => new Customer(p.id, p.name, p.email, p.cpf, p.password),
        );
      case 'admin':
        return data.map(
          p =>
            new User(
              p.id,
              p.name,
              p.email,
              p.password,
              p.cpf,
              p.phone,
              p.dateOfBirth,
            ),
        );
      default:
        throw new Error('Invalid person type');
    }
  }
}
