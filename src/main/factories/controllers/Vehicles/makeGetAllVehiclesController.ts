import { GetAllVehiclesController } from "@/presentation/controller/vehicle/ListVehicleController"
import { makeGetAllVehiclesUseCase } from "../../useCases/Vehicle/makeGetAllVehiclesUseCase"

export const makeGetAllVehiclesController = () => {
    return new GetAllVehiclesController(makeGetAllVehiclesUseCase())
}