import { User } from '@/domain/User/entity/User';

export type TravelsActives = {
  name: string;
  id: string;
};

export class Driver extends User {
  private _cnh: string;
  private _cnhDateOfIssue: Date;
  private _cnhExpirationDate: Date;
  private _travelsActives: TravelsActives[];

  constructor(id: string, name: string) {
    super(id, name);
  }

  validate() {
    const errors = [];
    if (!this.id) errors.push('[Driver] id is required');
    if (!this.name) errors.push('[Driver] name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get id(): string {
    return this.id;
  }

  get name(): string {
    return this.name;
  }

  get travelsActives(): TravelsActives[] {
    return this.travelsActives;
  }

  set email(email: string) {
    this.email = email;
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
