import { Travel, TripStops } from "@prisma/client";

export interface ICreateTravelProtocolRepository {
  create(
    data: ICreateTravelProtocolRepository.Params,
  ): Promise<ICreateTravelProtocolRepository.Result>;
}

export namespace ICreateTravelProtocolRepository {
  export type Result = Travel;
  export type Params = {
    arrivalDate: Date
    departureDate: Date
    description: string
    driverId: string
    idVehicle: string;
    routeId: string;
    tripStops: {
      cityIdFromTo: string
      tripStopOrder: number
    }[]
  };
}
