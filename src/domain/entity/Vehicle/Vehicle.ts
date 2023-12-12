import { v4 } from 'uuid';

export class Vehicle {
  private id: string;
  private name: string;
  private idDriver: string;
  private quantitySeats: number;
  private isAvailable: boolean;

  constructor(
    id = v4(),
    name: string,
    idDriver: string,
    quantitySeats: number,
    isAvailable: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.idDriver = idDriver;
    this.quantitySeats = quantitySeats;
    this.isAvailable = isAvailable;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getIdDriver(): string {
    return this.idDriver;
  }

  getQuantitySeats(): number {
    return this.quantitySeats;
  }

  getIsAvailable(): boolean {
    return this.isAvailable;
  }
}
