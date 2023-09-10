import {
  City,
  PricesBetweenStops,
  Route,
  Ticket,
  Travel,
  TripStops,
  Vehicle,
} from '@prisma/client';
import { Driver } from 'typeorm';

export interface ISearchTravelProtocolRepository {
  search(
    data: ISearchTravelProtocolRepository.Params,
  ): Promise<ISearchTravelProtocolRepository.Result[]>;
}

export namespace ISearchTravelProtocolRepository {
  export type Params = {
    origin: string;
    destiny: string;
    dateOfTravel: Date;
  };

  export type Result = {
    departureDate: Date;
    arrivalDate: Date;
    Route: Route;
    Tickets: {
      pricesBetweenStopsId: string;
      PricesBetweenStops: {
        TripStops: TripStops;
      }
    }[]
    Driver: {
      User: {
        name: string;
      };
    };
    Vechicle: Vehicle;
  };
}
