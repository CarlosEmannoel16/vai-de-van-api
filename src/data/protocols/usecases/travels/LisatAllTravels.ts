import { Driver, Route, User, Vehicle } from "@prisma/client";

export interface IListAllTravels {
    execute(): Promise<IListAllTravels.Params[]>;
}

export namespace IListAllTravels{
    export type Params = {
        id: string,
        departureDate: Date,
        arrivalDate: Date,
        driverId: string,
        driverName: string,
        routeId: string,
        vehicleId: string,
        vehicleName: string,
        amount_of_accents: number,
        update_at: Date,
        created_at: Date,
    }
}
