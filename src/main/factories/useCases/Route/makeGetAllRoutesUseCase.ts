import { GetAllRoutesUseCase } from "@/data/usecases/routes/GetAllRouterUseCase";
import { IGetAllRoutes } from "@/domain/usecases/routes/GetAllRoutes";
import { RouteRepository } from "@/infra/RouteRepository";

export const makeGetAllRoutesUseCase = (): IGetAllRoutes => {
    return new GetAllRoutesUseCase(new RouteRepository());
}