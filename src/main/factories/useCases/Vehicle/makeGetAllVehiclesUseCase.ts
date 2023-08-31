import { FindAllVehiclesUseCase } from "@/data/usecases/vechicle/FindAllVehicles";
import { VechicleRepository } from "@/infra/VechicleRepository";

export const makeGetAllVehiclesUseCase = () => {
    return new FindAllVehiclesUseCase(new VechicleRepository());
}