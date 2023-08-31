import { GetAllRoutesUseCase } from "@/data/usecases/routes/GetAllRouterUseCase";
import { IGetAllRoutes } from "@/domain/usecases/routes/GetAllRoutes";
import { makeRoutesRepositories } from "../../repositories/makeRouteRepositories";

export const makeGetAllRoutesUseCase = (): IGetAllRoutes => {
    return new GetAllRoutesUseCase(makeRoutesRepositories());
}