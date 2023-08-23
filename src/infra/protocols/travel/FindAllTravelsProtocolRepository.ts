import { Route, Travel, Vehicle, Driver, User } from "@prisma/client";

export interface IFindAllTravelsProtocolRepository {
    findAll(): Promise<IFindAllTravelsProtocolRepository.Params[]>;
}

export namespace IFindAllTravelsProtocolRepository {
    export type Params = {
      id: string,
      departureDate: Date,
      arrivalDate: Date,
      Driver: {
        id: string,
        User: User
      },
      Route: Route,
      Vechicle: Vehicle,
      update_at: Date,
      created_at: Date,
    };
}