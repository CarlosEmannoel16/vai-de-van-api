import { v4 } from 'uuid';

export class Vehicle {
  private _id: string;
  private _name: string;
  private _quantitySeats: number;
  private _color: string;
  private _situation: string;
  private _plate: string;
  private _classification = 0;
  private _withAir = false;
  private _ownerId: string;

  constructor(id = v4(), name: string, quantitySeats: number) {
    this._id = id;
    this._name = name;
    this._quantitySeats = quantitySeats;
  }

  get Id(): string {
    return this._id;
  }
  get ownerId(): string {
    return this._ownerId;
  }

  set ownerId(ownerId: string) {
    this._ownerId = ownerId;
  }

  get name(): string {
    return this._name;
  }

  get quantitySeats(): number {
    return this._quantitySeats;
  }

  get classification(): number {
    return this._classification;
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
}
