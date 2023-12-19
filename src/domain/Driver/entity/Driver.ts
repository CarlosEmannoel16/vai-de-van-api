export type TravelsActives = {
  name: string;
  id: string;
};

export class Driver {
  private _id: string;
  private _name: string;
  private travelsActives: TravelsActives[];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    const errors = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}
