import { Vehicle } from "@/domain/entity/Vehicle/Vehicle"

export interface GetVehicleByIdProtocolRepository{
    getById(id: string): Promise<Vehicle>
}

