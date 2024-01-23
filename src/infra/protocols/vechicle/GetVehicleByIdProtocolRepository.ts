import { Vehicle } from "@/domain/Vehicle/entity/Vehicle"

export interface GetVehicleByIdProtocolRepository{
    getById(id: string): Promise<Vehicle>
}

