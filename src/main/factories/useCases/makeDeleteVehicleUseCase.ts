import { DeleteVehicleUseCase } from "@/data/usecases/vechicle/DeleteVehicle";
import { IDeleteVehicleUseCase } from "@/domain/usecases/vechicle/FindAllVehicleUseCase";
import { makeVehicleRepository } from "@/main/factories/repositories/index";

export const makeDeleteVehicleUseCase = (): IDeleteVehicleUseCase=>{
    return new DeleteVehicleUseCase(makeVehicleRepository())
}