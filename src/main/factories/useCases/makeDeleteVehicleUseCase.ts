import { DeleteVehicleUseCase } from "@/data/usecases/vechicle/deleteVehicle";
import { IDeleteVehicleUseCase } from "@/domain/usecases/vechicle/DeleteVehicleUseCase";
import { makeVehicleRepository } from "@/main/factories/repositories/index";

export const makeDeleteVehicleUseCase = (): IDeleteVehicleUseCase=>{
    return new DeleteVehicleUseCase(makeVehicleRepository())
}