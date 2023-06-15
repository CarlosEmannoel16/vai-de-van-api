import { CreateVechicleUseCase } from "@/data/usecases/vechicle/CreateVechicle"
import { makeVehicleRepository } from "../repositories/makeVehicleRepository"

export const makeCreateVehicleUseCase = ()=>{
    return new CreateVechicleUseCase(makeVehicleRepository())
}

