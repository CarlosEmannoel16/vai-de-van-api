export class Ticket {
  private _id: string;
  private _origin: string;
  private _destiny: string;

  constructor(id: string, destiny: string, origin: string) {
    this._id = id;
    this._origin = origin;
    this._destiny = destiny;
  }

  get id(): string {
    return this._id;
  }

  get origin(): string {
    return this._origin;
  }

  get destiny(): string {
    return this._destiny;
  }
}
