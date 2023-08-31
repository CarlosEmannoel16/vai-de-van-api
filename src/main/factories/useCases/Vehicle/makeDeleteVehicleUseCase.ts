import { DeleteVehicleUseCase } from "@/data/usecases/vechicle/DeleteVehicle";
import { IFindAllVehiclesUseCase } from "@/domain/usecases/vechicle/FindAllVehicleUseCase";
import { makeVehicleRepository } from "../../repositories/makeVehicleRepository";
import { IDeleteVehicleUseCase } from "@/domain/usecases/vechicle/DeleteVehicleUseCase copy";

export const makeDeleteVehicleUseCase = (): IDeleteVehicleUseCase=>{
    return new DeleteVehicleUseCase(makeVehicleRepository())
}