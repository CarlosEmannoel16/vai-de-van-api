import { Driver } from '@/domain/Driver/entity/Driver';
import { Travel, TravelStatus } from '../entity/Travel';
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
  description?: string;
  status?: TravelStatus;
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
      return this.createTravel(travel);
    });
  }
}
