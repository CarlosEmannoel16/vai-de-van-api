import { TripStops } from "@prisma/client";

export interface ICreateTripStopsProtocolRepository {
  create(
    data: ICreateTripStopsProtocolRepository.Params,
  ): ICreateTripStopsProtocolRepository.Result;
}

export namespace ICreateTripStopsProtocolRepository {
  export type Result = Promise<TripStops>;
  export type Params = {
    tripStopOrder: string;
    cityIdFromTo: string;
    pricesBetweenStopsDestiny: { idDestiny: string; price: number }[];
    travelId: string;
  };
}
