import { GetByIdRouterUseCase } from "@/data/usecases/routes/GetBuIdRouterUseCase";
import { IGetByIdRoutes } from "@/domain/usecases/routes/GetByIdRoutes";
import { RouteRepository } from "@/infra/RouteRepository";

export const makeGetByIdRouteUseCase = (): IGetByIdRoutes => {
    return new GetByIdRouterUseCase(new RouteRepository())
}