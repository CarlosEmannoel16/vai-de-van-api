import { VehicleInterface } from "@/domain/Vehicle/interface/VehicleInterface"

export interface GetVehicleByIdProtocolRepository{
    getById(id: string): Promise<VehicleInterface>
}

