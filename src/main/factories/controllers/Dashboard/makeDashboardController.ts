import { DashboardController } from "@/presentation/controller/dashboard/DashboardController"
import { makeDashboardUseCase } from "../../useCases/Dashboard/makeDashboardUseCase"

export const makeDashboardController = () => {
    return new DashboardController(makeDashboardUseCase())
}