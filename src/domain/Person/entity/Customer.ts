import { CustomerInterface } from '../protocols/CustomerInterface';
import { CustomerValidatorFactory } from '../factory/PersonValidatorFactory';
import { Person } from './Person';
import { PersonProps } from '../factory/PersonFactory';
export class Customer extends Person implements CustomerInterface {
  private _secondaryPhone: string;

  constructor(data: PersonProps) {
    super(data);
    CustomerValidatorFactory.create().validate(this);
  }

  get secondaryPhone(): string {
    return this._secondaryPhone;
  }

  addPassword(password: string): void {
    this._password = password;
  }
}
