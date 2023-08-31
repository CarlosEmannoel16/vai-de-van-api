import { DeleteVehicleController } from "@/presentation/controller/vehicle/DeleteVehicleController"
import { makeDeleteVehicleUseCase } from "../../useCases/Vehicle/makeDeleteVehicleUseCase"


export const makeDeleteVehicleController = ()=>{
    return new DeleteVehicleController(makeDeleteVehicleUseCase())
}