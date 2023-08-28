import {
  City,
  PricesBetweenStops,
  Route,
  Travel,
  TripStops,
  Vehicle,
} from '@prisma/client';

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
    Vechicle: Vehicle;
    TripStops: {
      City: City;
      tripStopOrder: number;
      PricesBetweenStops: PricesBetweenStops[];
    }[];
  }
}
