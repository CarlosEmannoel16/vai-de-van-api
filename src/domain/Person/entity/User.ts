import PersonInterface from '../protocols/PersonInterface';

export class User implements PersonInterface {
  private _id: string;
  private _phone: string;
  private _name: string;
  private _email: string;
  private _cpf: string;
  private _date_of_birth: Date;
  private _password: string;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    cpf: string,
    phone: string,
    date_of_birth: Date,
  ) {
    this._id = id;
    this._name = name;
    this._password = password;
    this._cpf = cpf;
    this._phone = phone;
    this._date_of_birth = date_of_birth;
    this.email = email;

    this.validate();
  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('[User] id is required');
    if (!this._name) errors.push('[User] name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get dateOfBirth(): Date {
    return this._date_of_birth;
  }

  get password(): string {
    return this._password;
  }

  get id(): string {
    return this._id;
  }

  get phone(): string {
    return this._phone;
  }

  get name(): string {
    return this._name;
  }

  get cpf(): string {
    return this._cpf;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }
}
