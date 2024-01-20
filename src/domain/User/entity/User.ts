export class User {
  private _id: string;
  private _phone: string;
  private _name: string;
  private _email: string;
  private _cpf: string;
  private _date_of_birth: Date;
  private _password: string;
  private _driver: boolean;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(id: string, name: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;

    this.validate();
  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('[User] id is required');
    if (!this._name) errors.push('[User] name is required');
    if (!this._email) errors.push('[User] email is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  set isDriver(driver: boolean) {
    this._driver = driver;
  }

  get isDriver(): boolean {
    return this._driver;
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


}
