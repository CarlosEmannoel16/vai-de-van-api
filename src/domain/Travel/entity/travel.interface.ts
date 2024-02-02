import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';
import { Route } from '@/domain/Route/entity/Route';
import { Vehicle } from '@/domain/Vehicle/entity/Vehicle';
import { TravelStatus } from './Travel';
import { Ticket } from '@/domain/Ticket/entity/Ticket';

export interface TravelInterface {
  addTickets(ticket: Ticket[]): void;
  getNameStopById(id: string): string;
  getDateOfDepartureInBr(): string;
  getValueBetweenStops(idStopOrigin: string, idStopDestiny: string): string;
  getQuantitySeatsBetweenStops(
    idStopOrigin: string,
    idStopDestiny: string,
  ): number;

  get id(): string;

  get name(): string;
  set name(name: string);

  get vehicle(): Vehicle;
  get idVehicle(): string;
  set vehicle(vehicle: Vehicle);

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

  get classificationVehicle(): number;
}
