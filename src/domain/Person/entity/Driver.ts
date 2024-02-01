import { DriverInterface } from '../protocols/DriverInterface';

export class Driver implements DriverInterface {
  private _cnh: string;
  private _cpf: string;
  private _dateOfBirth: Date;
  private _cnhDateOfIssue: Date;
  private _cnhExpirationDate: Date;
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    cpf: string,
    dateOfBirth: Date,
    cnh: string,
  ) {
    this._id = id;
    this._name = name;
    this.email = email;
    this._dateOfBirth = dateOfBirth;
    this._cnh = cnh;
    this._cpf = cpf;
    this._password = password;
  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('[Driver] id is required');
    if (!this._name) errors.push('[Driver] name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get id(): string {
    return this._id;
  }
  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }
  get cpf(): string {
    return this._cpf;
  }

  get password(): string {
    return this._password;
  }

  get name(): string {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }

  set cnh(cnh: string) {
    this._cnh = cnh;
  }

  set cnhDateOfIssue(cnhDateOfIssue: Date) {
    this._cnhDateOfIssue = cnhDateOfIssue;
  }

  set cnhExpirationDate(cnhExpirationDate: Date) {
    this._cnhExpirationDate = cnhExpirationDate;
  }
}
