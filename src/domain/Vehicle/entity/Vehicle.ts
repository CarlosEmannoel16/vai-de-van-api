import { v4 } from 'uuid';

export class Vehicle {
  private id: string;
  private name: string;
  private quantitySeats: number;
  private color: string;
  private situation: string;
  private plate: string;

  constructor(
    id = v4(),
    name: string,
    quantitySeats: number,
  ) {
    this.id = id;
    this.name = name;
    this.quantitySeats = quantitySeats;
  }

  get Id(): string {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  get QuantitySeats(): number {
    return this.quantitySeats;
  }

  get IsAvailable(): boolean {
    return true
  }
}
