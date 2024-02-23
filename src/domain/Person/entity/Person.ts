import { v4 } from 'uuid';
import { PersonProps } from '../factory/PersonFactory';
import PersonInterface from '../protocols/PersonInterface';

export abstract class Person implements PersonInterface {
  public _id: string;
  public _name: string;
  public _dateOfBirth: Date;
  public _email: string;
  public _cpf: string;
  public _password: string;
  public _phone: string;
  public _dateOfCreate: Date;
  public _dateOfUpdate: Date;

  constructor({
    name,
    dateOfBirth,
    email,
    cpf,
    id,
    password,
    phone,
    dateOfCreate,
    dateOfUpdate,
  }: PersonProps) {
    this._id = id || v4();
    this._name = name;
    this._dateOfBirth = dateOfBirth;
    this._email = email;
    this._cpf = cpf;
    this._password = password;
    this._phone = phone;
    this._dateOfCreate = dateOfCreate;
    this._dateOfUpdate = dateOfUpdate;

  }
  get dateOfCreate(): Date {
   return this._dateOfCreate;
  }
  get dateOfUpdate(): Date {
   return this._dateOfUpdate;
  }
  get phone(): string {
    return this._phone;
  }

  get name(): string {
    return this._name;
  }
  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }
  get email(): string {
    return this._email;
  }
  get cpf(): string {
    return this._cpf;
  }
  get id(): string {
    return this._id;
  }
  get password(): string {
    return this._password;
  }
}
