import { CustomerInterface } from '../protocols/CustomerInterface';
import PersonInterface from '../protocols/PersonInterface';

export class Customer implements CustomerInterface {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _cpf: string;
  private _phone: string;
  private _secondaryPhone: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    cpf: string,
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._cpf = cpf;
    this._password = password;
  }
  get secondaryPhone(): string {
    return this._secondaryPhone;
  }
  get dateOfBirth(): Date {
    throw new Error('Method not implemented.');
  }

  addPassword(password: string): void {
    this._password = password;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get cpf(): string {
    return this._cpf;
  }

  get phone(): string {
    return this._phone;
  }
}
