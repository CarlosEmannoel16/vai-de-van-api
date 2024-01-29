import { FindAllVehiclesUseCase } from "@/data/usecases/vehicle/FindAllVehicles";
import { VehicleRepository } from "@/infra/VehicleRepository";

export const makeGetAllVehiclesUseCase = () => {
    return new FindAllVehiclesUseCase( new VehicleRepository());
}
