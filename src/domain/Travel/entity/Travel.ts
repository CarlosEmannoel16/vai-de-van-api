import { Route } from '@/domain/Route/Route';
import { Vehicle } from '../../Vehicle/entity/Vehicle';
import { Driver } from '@/domain/Driver/entity/Driver';
import { Ticket } from '@/domain/Ticket/entity/Ticket';

export class Travel {
  private id: string;
  private Route: Route;
  private name: string;
  private Driver: Driver;
  private Vehicle: Vehicle;
  private tickets: Ticket[];
  private arrivalDate: Date;
  private departureDate: Date;

  constructor(
    id: string,
    name: string,
    Route: Route,
    Driver: Driver,
    Vehicle: Vehicle,
    arrivalDate: Date,
    departureDate: Date,
  ) {
    this.id = id;
    this.name = name;
    this.Route = Route;
    this.Driver = Driver;
    this.Vehicle = Vehicle;
    this.arrivalDate = arrivalDate;
    this.departureDate = departureDate;
    this.validate();
  }

  validate() {
    const errors = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    if (!this.Driver) errors.push('idDriver is required');
    if (!this.Vehicle) errors.push('Vehicle is required');
    if (!this.arrivalDate) errors.push('arrivalDate is required');
    if (!this.departureDate) errors.push('departureDate is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get Id(): string {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  get IdVehicle(): string {
    return this.Vehicle.Id;
  }

  get ArrivalDate(): Date {
    return this.arrivalDate;
  }

  get DepartureDate(): Date {
    return this.departureDate;
  }

  changeDepartureDate(departureDate: Date) {
    this.departureDate = departureDate;
  }

  get IdRoute(): string {
    return this.Route.Id;
  }

  get IdDriver(): string {
    return this.Driver.Id;
  }

  get nameDriver(): string {
    return this.Driver.Name;
  }

  addTickets(ticket: Ticket[]) {
    this.tickets = [...this.tickets, ...ticket];
  }
}
