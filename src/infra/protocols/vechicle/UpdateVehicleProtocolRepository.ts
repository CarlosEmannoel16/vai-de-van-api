import { Vehicle } from "@prisma/client";

export interface IUpdateVehicleRepository{
    update(data: Vehicle):Promise<Vehicle>
}