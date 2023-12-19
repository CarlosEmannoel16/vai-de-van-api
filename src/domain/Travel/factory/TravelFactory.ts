import { Driver } from '@/domain/Driver/entity/Driver';
import { Travel } from '../entity/Travel';
import { Route } from '@/domain/Route/entity/Route';
import { Vehicle } from '@/domain/Vehicle/entity/Vehicle';
import { Ticket } from '@/domain/Ticket/entity/Ticket';

export type CreateTravelFactoryParams = {
  id?: string;
  name: string;
  route: Route;
  driver: Driver;
  vehicle: Vehicle;
  arrivalDate: Date;
  tickets?: Ticket[];
  departureDate: Date;
};
export class TravelFactory {
  static createTravel({
    id,
    name,
    route,
    driver,
    vehicle,
    tickets = [],
    arrivalDate,
    departureDate,
  }: CreateTravelFactoryParams) {

    const travel = new Travel(
      id,
      name,
      route,
      driver,
      vehicle,
      departureDate,
      arrivalDate,
    );

    if (tickets.length) {
      travel.addTickets(tickets);
    }

    return travel;
  }
}
