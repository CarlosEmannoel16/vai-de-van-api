import { UpdateVehicleUseCase } from "@/data/usecases/vechicle/UpdateVehicle"
import { VechicleRepository } from "@/infra/VechicleRepository"
import { UpdateVehicleController } from "@/presentation/controller/vehicle/UpdateVehicleController"

export const makeUpdateVehicleController = () => {
    return new UpdateVehicleController(new UpdateVehicleUseCase(new VechicleRepository()))
}