import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';
import { Route } from '@/domain/Route/entity/Route';
import { TravelStatus } from './Travel';
import { VehicleInterface } from '@/domain/Vehicle/interface/VehicleInterface';
import { TicketInterface } from '@/domain/Ticket/interface/TicketInterface';

export interface TravelInterface {
  addTickets(ticket: TicketInterface[]): void;
  getNameStopById(id: string): string;
  getDateOfDepartureInBr(): string;
  getValueBetweenStops(idStopOrigin: string, idStopDestiny: string): string;
  getQuantitySeatsBetweenStops(
    idStopOrigin: string,
    idStopDestiny: string,
  ): number;

  get id(): string;

  get tickets(): TicketInterface[];

  get name(): string;
  set name(name: string);

  get vehicle(): VehicleInterface;
  get idVehicle(): string;
  set vehicle(vehicle: VehicleInterface);

  get departureDate(): Date;
  set departureDate(departureDate: Date);

  get arrivalDate(): Date;

  get idRoute(): string;
  get route(): Route;

  get driver(): DriverInterface;
  get idDriver(): string;
  get nameDriver(): string;

  get status(): TravelStatus;

  set description(description: string);
  get description(): string;

  set created_at(created_at: Date);
  get created_at(): Date;

  set update_at(update_at: Date);
  get update_at(): Date;


}
