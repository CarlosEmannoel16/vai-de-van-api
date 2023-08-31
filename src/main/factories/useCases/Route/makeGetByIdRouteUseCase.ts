import { GetByIdRouterUseCase } from "@/data/usecases/routes/GetBuIdRouterUseCase";
import { IGetByIdRoutes } from "@/domain/usecases/routes/GetByIdRoutes";
import { makeRoutesRepositories } from "../../repositories/makeRouteRepositories";

export const makeGetByIdRouteUseCase = (): IGetByIdRoutes => {
    return new GetByIdRouterUseCase(makeRoutesRepositories())
}