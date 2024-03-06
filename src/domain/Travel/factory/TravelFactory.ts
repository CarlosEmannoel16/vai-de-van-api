import { Travel, TravelStatus } from '../entity/Travel';
import { Route } from '@/domain/Route/entity/Route';
import { VehicleInterface } from '@/domain/Vehicle/interface/VehicleInterface';
import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';
import { TicketInterface } from '@/domain/Ticket/interface/TicketInterface';

export type CreateTravelFactoryParams = {
  id?: string;
  name: string;
  route: Route;
  driver: DriverInterface;
  vehicle: VehicleInterface;
  arrivalDate: Date;
  tickets?: TicketInterface[];
  departureDate: Date;
  description?: string;
  status?: TravelStatus;
};
export class TravelFactory {
  static create({
    id,
    name,
    route,
    driver,
    vehicle,
    tickets = [],
    arrivalDate,
    departureDate,
    status,
    description,
  }: CreateTravelFactoryParams) {
    const travel = new Travel(
      id,
      name,
      route,
      status,
      driver,
      vehicle,
      departureDate,
      arrivalDate,
    );

    if (tickets.length) {
      travel.addTickets(tickets);
    }

    if (description) {
      travel.description = description;
    }

    return travel;
  }

  static mapTravel(travels: CreateTravelFactoryParams[]) {
    return travels.map(travel => {
      return this.create(travel);
    });
  }
}
