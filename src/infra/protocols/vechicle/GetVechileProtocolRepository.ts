import { Vehicle } from "@prisma/client"

export interface GetVechicleProtocolRepository{
    getAll(): Promise<Vehicle[]>
}
