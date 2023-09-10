import { CreateVehicleUseCase } from "@/data/usecases/vechicle/CreateVechicle"
import { UserRepository } from "@/infra/UserRepository"
import { VehicleRepository } from "@/infra/VehicleRepository"

export const makeCreateVehicleUseCase = ()=>{
    return new CreateVehicleUseCase(new VehicleRepository(), new UserRepository())
}

