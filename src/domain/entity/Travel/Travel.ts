import { Vehicle } from "../Vehicle/Vehicle";

export class Travel {
  private id: string;
  private name: string;
  private idRoute: string;
  private Vehicle: Vehicle;
  private idDriver: string;
  private departureDate: Date;
  
  constructor(
    id: string,
    name: string,
    idRoute: string,
    Vehicle: Vehicle,
    idDriver: string,
    departureDate: Date,
  ) {
    this.id = id;
    this.name = name;
    this.idRoute = idRoute;
    this.Vehicle = Vehicle;
    this.idDriver = idDriver;
    this.departureDate = departureDate;
  }

  validate() {
    const errors = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    if (!this.idRoute) errors.push('idRoute is required');
    if (!this.Vehicle) errors.push('Vehicle is required');
    if (!this.idDriver) errors.push('idDriver is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get Id(): string {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  get IdRoute(): string {
    return this.idRoute;
  }

  get IdVehicle(): string {
    return this.Vehicle.Id;
  }

  get IdDriver(): string {
    return this.idDriver;
  }

  get DepartureDate(): Date {
    return this.departureDate;
  }
}
