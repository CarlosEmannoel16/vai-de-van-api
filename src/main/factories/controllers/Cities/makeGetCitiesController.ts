import { GetAllCitiesController } from "@/presentation/controller/City/getAllCitiesController"
import { makegetCitiesUseCase } from "../../useCases/City/makeGetCitiesUseCase"

export const makeGetCitiesController = () => {
    return new GetAllCitiesController(makegetCitiesUseCase())
}