import { UpdateRouteUseCase } from "@/data/usecases/routes/UpdateRoutesUseCase";
import { makeRoutesRepositories } from "../../repositories/makeRouteRepositories";

export const makeUpdateRouteUseCase = () => {
    return new UpdateRouteUseCase(makeRoutesRepositories());
}