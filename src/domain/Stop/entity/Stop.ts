export class Stop {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _image: string;
  public readonly _disable: boolean;
  public readonly _created_at: Date;
  public readonly _updated_at: Date;

  constructor(id: string, name: string, disable: boolean) {
    this._id = id;
    this._name = name;
    this._disable = disable || false;
    this._created_at = new Date();
    this._updated_at = new Date();

    this.validate();


  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('id is required');
    if (!this._name) errors.push('name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }
}
