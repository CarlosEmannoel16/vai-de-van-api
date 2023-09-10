import { UpdateVehicleUseCase } from "@/data/usecases/vechicle/UpdateVehicle"
import { VehicleRepository } from "@/infra/VehicleRepository"
import { UpdateVehicleController } from "@/presentation/controller/vehicle/UpdateVehicleController"

export const makeUpdateVehicleController = () => {
    return new UpdateVehicleController(new UpdateVehicleUseCase(new VehicleRepository()))
}