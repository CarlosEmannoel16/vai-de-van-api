import { GetVehicleByIdUseCase } from "@/data/usecases/vechicle/GetVehicleById"
import { VechicleRepository } from "@/infra/VechicleRepository"
import { GetVehicleByIdController } from "@/presentation/controller/vehicle/GetVehicleByIdController"

export const makeGetVehicleByIdController = () => {
    return new GetVehicleByIdController(new GetVehicleByIdUseCase(new VechicleRepository()))
}