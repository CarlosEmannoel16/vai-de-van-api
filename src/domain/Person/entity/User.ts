import { PersonProps } from '../factory/PersonFactory';
import PersonInterface from '../protocols/PersonInterface';
import { Person } from './Person';

export class User extends Person implements PersonInterface {
  private _created_at: Date;
  private _updated_at: Date;

  constructor(data: PersonProps) {
    super(data);
    this.validate();
  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('[User] id is required');
    if (!this._name) errors.push('[User] name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }
}
