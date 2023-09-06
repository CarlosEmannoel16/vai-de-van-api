import { Vehicle } from "@prisma/client"

export interface GetVehicleProtocolRepository{
    getAll(): Promise<Vehicle[]>
}
