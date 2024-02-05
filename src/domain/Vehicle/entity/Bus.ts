import { BusInterface } from '../interface/BusInterface';
import { SituationVehicleType } from '../interface/SituationVehicleInterface';

export class Bus implements BusInterface {
  private _id: string;
  private _name: string;
  private _quantitySeats: number;
  private _color: string;
  private _situation: SituationVehicleType;
  private _plate: string;
  private _withAir = false;
  private _ownerName: string;
  private _createdAt: Date;
  private _dateOfUpdate: Date;

  constructor(
    id: string,
    name: string,
    quantitySeats: number,
    color: string,
    situation: SituationVehicleType,
    plate: string,
    withAir: boolean,
    ownerName: string,
    createdAt: Date,
    dateOfUpdate: Date,
  ) {
    this._id = id;
    this._name = name;
    this._quantitySeats = quantitySeats;
    this._color = color;
    this._situation = situation;
    this._plate = plate;
    this._withAir = withAir;
    this._ownerName = ownerName;
    this._createdAt = createdAt;
    this._dateOfUpdate = dateOfUpdate;
  }
  get dateOfCreate(): Date {
    return this._createdAt;
  }
  get dateOfUpdate(): Date {
    return this._dateOfUpdate;
  }

  get Id(): string {
    return this._id;
  }
  get ownerName(): string {
    return this._ownerName;
  }

  set ownerName(ownerId: string) {
    this._ownerName = ownerId;
  }

  get name(): string {
    return this._name;
  }

  get quantitySeats(): number {
    return this._quantitySeats;
  }

  set color(color: string) {
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  get id(): string {
    return this._id;
  }

  get description(): string {
    return this._name;
  }

  set plate(plate: string) {
    this._plate = plate;
  }

  get plate(): string {
    return this._plate;
  }

  set withAir(withAir: boolean) {
    this._withAir = withAir;
  }

  get withAir(): boolean {
    return this._withAir;
  }

  get situation(): SituationVehicleType {
    return this._situation;
  }
}
