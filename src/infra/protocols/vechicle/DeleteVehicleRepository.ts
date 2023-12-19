import { Vehicle } from "@prisma/client";

export interface IDeleteVehicleRepository{
    deleteById(id: string):Promise<boolean>
}
