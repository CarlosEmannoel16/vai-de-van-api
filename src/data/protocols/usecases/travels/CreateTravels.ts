import { Travel, TripStops } from '@prisma/client';

export interface ICreateTravels {
  execute(data: ICreateTravels.Params): Promise<Travel>;
}

export namespace ICreateTravels {
  export type Params = {
    arrivalDate: Date;
    departureDate: Date;
    description: string;
    driverId: string;
    idVehicle: string;
    routeId: string;
  };

  export type Result = {
    id: string;
    arrivalDate: Date;
    departureDate: Date;
    driverId: string;
    idVechicle: string;
    routeId: string;
    tripStops: {
      arrivalTime: Date;
      departureTime: Date;
      idStop: string;
    }[];
  };
}
