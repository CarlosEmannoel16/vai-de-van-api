import { PersonProps } from '../factory/PersonFactory';
import { DriverInterface } from '../protocols/DriverInterface';
import { Person } from './Person';

export class Driver extends Person implements DriverInterface {
  private _cnh: string;
  private _cnhDateOfIssue: Date;
  private _cnhExpirationDate: Date;

  constructor(data: PersonProps & { cnh: string }) {
    super(data);
    this._cnh = data.cnh;
  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('[Driver] id is required');
    if (!this._name) errors.push('[Driver] name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  set cnh(cnh: string) {
    this._cnh = cnh;
  }

  get cnh(): string {
    return this._cnh;
  }

  set cnhDateOfIssue(cnhDateOfIssue: Date) {
    this._cnhDateOfIssue = cnhDateOfIssue;
  }

  set cnhExpirationDate(cnhExpirationDate: Date) {
    this._cnhExpirationDate = cnhExpirationDate;
  }
}
