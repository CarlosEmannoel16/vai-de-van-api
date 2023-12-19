import { Vehicle } from "@/domain/Vehicle/entity/Vehicle";

export interface GetVehicleProtocolRepository{
    getAll(): Promise<Vehicle[]>
}
