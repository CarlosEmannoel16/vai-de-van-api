import { User } from '@/domain/User/entity/User';

export type TravelsActives = {
  name: string;
  id: string;
};

export class Driver {
  private _cnh: string;
  private _cnhDateOfIssue: Date;
  private _cnhExpirationDate: Date;
  private _travelsActives: TravelsActives[];
  private _id: string;
  private _name: string;
  private _email: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
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

  get name(): string {
    return this._name;
  }

  get travelsActives(): TravelsActives[] {
    return this.travelsActives;
  }

  set email(email: string) {
    this._email = email;
  }

  set cnh(cnh: string) {
    this._cnh = cnh;
  }

  set cpf(cpf: string) {
    this.cpf = cpf;
  }

  set date_of_birth(date_of_birth: Date) {
    this.date_of_birth = date_of_birth;
  }

  set phone(phone: string) {
    this.phone = phone;
  }

  set cnhDateOfIssue(cnhDateOfIssue: Date) {
    this._cnhDateOfIssue = cnhDateOfIssue;
  }

  set cnhExpirationDate(cnhExpirationDate: Date) {
    this._cnhExpirationDate = cnhExpirationDate;
  }

  set travelsActives(travelsActives: TravelsActives[]) {
    this._travelsActives = travelsActives;
  }

  get dateOfBirthToBR(): String {
    return this.date_of_birth.toLocaleDateString('pt-BR');
  }
}
