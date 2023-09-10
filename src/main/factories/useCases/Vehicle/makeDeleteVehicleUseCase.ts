import { DeleteVehicleUseCase } from "@/data/usecases/vechicle/DeleteVehicle";
import { IDeleteVehicleUseCase } from "@/domain/usecases/vechicle/DeleteVehicleUseCase copy";
import { VehicleRepository } from "@/infra/VehicleRepository";

export const makeDeleteVehicleUseCase = (): IDeleteVehicleUseCase=>{
    return new DeleteVehicleUseCase(new VehicleRepository())
}