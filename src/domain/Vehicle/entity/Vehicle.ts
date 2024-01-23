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

  constructor(id = v4(), name: string, quantitySeats: number) {
    this._id = id;
    this._name = name;
    this._quantitySeats = quantitySeats;
  }

  get Id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get QuantitySeats(): number {
    return this._quantitySeats;
  }

  get classification(): number {
    return this._classification;
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

  get plate(): string {
    return this._plate;
  }
}
