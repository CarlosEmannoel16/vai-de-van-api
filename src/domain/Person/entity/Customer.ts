import { CustomerInterface } from '../protocols/CustomerInterface';
import { CustomerValidatorFactory } from '../factory/PersonValidatorFactory';
import { Person } from './Person';
import { PersonProps } from '../factory/PersonFactory';
import { Messages } from '@/@shared/language';
export class Customer extends Person implements CustomerInterface {
  private _secondaryPhone: string;
  private _emailConfirm: boolean;

  constructor(data: PersonProps) {
    super(data);
    this._emailConfirm = data.emailConfirm;
    CustomerValidatorFactory.create().validate(this);
  }

  get secondaryPhone(): string {
    return this._secondaryPhone;
  }

  addPassword(password: string): void {
    this._password = password;
  }

  get emailConfirm(): boolean {
    return this._emailConfirm;
  }

  set emailConfirm(value: boolean) {
    if (this._emailConfirm)
      throw new Error(Messages.customer.emailAlreadyConfirmed);
    this._emailConfirm = value;
  }
}
