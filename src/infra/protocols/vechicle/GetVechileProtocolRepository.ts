import { VehicleInterface } from "@/domain/Vehicle/interface/VehicleInterface";

export interface GetVehicleProtocolRepository{
    getAll(): Promise<VehicleInterface[]>
}
