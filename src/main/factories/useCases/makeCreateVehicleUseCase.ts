import { CreateVechicleUseCase } from "@/data/usecases/vechicle/CreateVechicleUseCase"
import { makeVehicleRepository } from "../repositories/makeVehicleRepository"

export const makeCreateVehicleUseCase = ()=>{
    return new CreateVechicleUseCase(makeVehicleRepository())
}

