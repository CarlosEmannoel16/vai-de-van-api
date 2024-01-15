export class Customer {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _cpf: string;

  constructor(id: string, name: string, email: string, cpf: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._cpf = cpf;
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
}