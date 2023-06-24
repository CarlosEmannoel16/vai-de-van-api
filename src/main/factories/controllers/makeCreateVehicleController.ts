import { CreateVehicleController } from "@/presentation/controller/vehicle/CreateVehicleController"
import { makeCreateVehicleUseCase } from "../useCases/makeCreateVehicleUseCase"

export const makeCreateVehicleController = ()=>{
    return new CreateVehicleController(makeCreateVehicleUseCase())
}