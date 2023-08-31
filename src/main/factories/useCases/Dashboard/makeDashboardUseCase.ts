import { DashboardUseCase } from "@/data/usecases/report/Dashboard";
import { RouteRepository } from "@/infra/RouteRepository";
import { TravelRepository } from "@/infra/TravelRepository";
import { VechicleRepository } from "@/infra/VechicleRepository";

export const makeDashboardUseCase = () => {
    return new DashboardUseCase(new RouteRepository(), new TravelRepository(), new VechicleRepository());
}