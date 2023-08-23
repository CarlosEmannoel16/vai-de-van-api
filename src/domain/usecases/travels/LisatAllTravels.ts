import { Driver, Route, User, Vehicle } from "@prisma/client";

export interface IListAllTravels {
    execute(): Promise<IListAllTravels.Params[]>;
}

export namespace IListAllTravels{
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
    }
}