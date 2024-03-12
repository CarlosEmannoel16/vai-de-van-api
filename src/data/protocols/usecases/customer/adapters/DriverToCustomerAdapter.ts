import { Customer } from '@/domain/Person/entity/Customer';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';

export class DriverToCustomerAdapter implements CustomerInterface {
  constructor(private readonly driver: DriverInterface) {}

  get phone(): string {
    return this.driver.phone;
  }
  get secondaryPhone(): string {
    return '';
  }
  get emailConfirm(): boolean {
    return true;
  }
  set emailConfirm(value: boolean) {
    return;
  }
  get name(): string {
    return this.driver.name;
  }
  get dateOfBirth(): Date {
    return this.driver.dateOfBirth;
  }
  get email(): string {
    return this.driver.email;
  }
  get cpf(): string {
    return this.driver.cpf;
  }
  get id(): string {
    return this.driver.id;
  }
  get password(): string {
    return this.driver.password;
  }
  get dateOfCreate(): Date {
    return new Date();
  }
  get dateOfUpdate(): Date {
    return new Date();
  }
}
