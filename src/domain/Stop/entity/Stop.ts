import { StopValidatorFactory } from '../factory/StopValidatorFactory';
import { StatusStopInterface } from '../interface/StatusStopInterface';
import { StopInterface } from '../interface/StopInterface';

export class Stop implements StopInterface {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _image: string;
  public readonly _disable: boolean;
  private readonly _coordinates: string;
  public readonly _created_at: Date;
  public readonly _updated_at: Date;
  private readonly _status: StatusStopInterface;

  constructor(
    id: string,
    name: string,
    status: StatusStopInterface,
    coordinates: string,
  ) {
    this._id = id;
    this._name = name;
    this._created_at = new Date();
    this._updated_at = new Date();
    this._coordinates = coordinates;

    StopValidatorFactory.create().validate(this);
  }
  get coordinates(): string {
    return this._coordinates;
  }
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get status(): StatusStopInterface {
    return this._status;
  }
  get image(): string {
    return this._image;
  }
}
