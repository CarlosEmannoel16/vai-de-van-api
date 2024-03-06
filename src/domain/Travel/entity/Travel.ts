import { Route } from '@/domain/Route/entity/Route';
import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { TravelInterface } from '../Interfaces/travel.interface';
import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';
import { VehicleInterface } from '@/domain/Vehicle/interface/VehicleInterface';
import { TravelValidatorFactory } from '../factory/TravelValidatorFactory';
import { TravelService } from '../services/TravelService';
import { TicketInterface } from '@/domain/Ticket/interface/TicketInterface';

export type TravelStatus =
  | 'EM_ANDAMENTO'
  | 'CONCLUIDA'
  | 'CANCELADA'
  | 'DESABILITADA'
  | 'ABERTA';

export class Travel implements TravelInterface {
  private _id: string;
  private _Route: Route;
  private _name: string;
  private _Driver: DriverInterface;
  private _Vehicle: VehicleInterface;
  private _tickets: TicketInterface[] = [];
  private _arrivalDate: Date;
  private _departureDate: Date;
  private _update_at: Date;
  private _created_at: Date;
  private _status: TravelStatus;
  private _description: string;

  constructor(
    id: string,
    name: string,
    Route: Route,
    status: TravelStatus,
    Driver: DriverInterface,
    Vehicle: VehicleInterface,
    arrivalDate: Date,
    departureDate: Date,
  ) {
    this._id = id;
    this._name = name;
    this._Route = Route;
    this._status = status || 'DESABILITADA';
    this._Driver = Driver;
    this._Vehicle = Vehicle;
    this._arrivalDate = arrivalDate;
    this._departureDate = departureDate;

    TravelValidatorFactory.create().validate(this);
  }
  get tickets(): TicketInterface[] {
    return this._tickets
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get idVehicle(): string {
    return this._Vehicle.id;
  }

  get arrivalDate(): Date {
    return this._arrivalDate;
  }

  get departureDate(): Date {
    return this._departureDate;
  }

  set departureDate(departureDate: Date) {
    this._departureDate = departureDate;
  }

  get idRoute(): string {
    return this._Route.id;
  }

  get route(): Route {
    return this._Route;
  }

  get driver(): DriverInterface {
    return this._Driver;
  }

  get idDriver(): string {
    return this._Driver.id;
  }

  get nameDriver(): string {
    return this._Driver.name;
  }

  get status(): TravelStatus {
    return this._status;
  }

  get vehicle(): VehicleInterface {
    return this._Vehicle;
  }

  set update_at(update_at: Date) {
    this._update_at = update_at;
  }

  get update_at(): Date {
    return this._update_at;
  }

  set created_at(created_at: Date) {
    this._created_at = created_at;
  }

  set description(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  get created_at(): Date {
    return this._created_at;
  }

  addTickets(tickets: TicketInterface[]) {
    this._tickets = [...this._tickets, ...tickets];
  }

  getNameStopById(id: string): string {
    const stop = this._Route.tripStops.find(stop => stop.stop.id === id);
    if (!stop) throw new Error('Stop not found');
    return stop.stop.name;
  }

  getDateOfDepartureInBr(): string {
    return this._departureDate.toLocaleDateString('pt-br', {
      timeZone: 'America/Sao_Paulo',
    });
  }

  getValueBetweenStops(origin: string, destiny: string) {
    return TravelService.getValueBetweenStops(this._Route, origin, destiny);
  }

  getQuantitySeatsBetweenStops(
    stopIdOrigin: string,
    stopIdDestiny: string,
  ): number {
    return TravelService.getQuantitySeatsBetweenStops(
      this,
      stopIdOrigin,
      stopIdDestiny,
    );
  }
}
