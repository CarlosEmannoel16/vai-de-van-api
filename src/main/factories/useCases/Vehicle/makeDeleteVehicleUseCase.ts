import { DeleteVehicleUseCase } from "@/data/usecases/vechicle/DeleteVehicle";
import { IDeleteVehicleUseCase } from "@/data/protocols/usecases/vechicle/DeleteVehicleUseCase copy";
import { VehicleRepository } from "@/infra/VehicleRepository";

export const makeDeleteVehicleUseCase = (): IDeleteVehicleUseCase=>{
    return new DeleteVehicleUseCase(new VehicleRepository())
}
