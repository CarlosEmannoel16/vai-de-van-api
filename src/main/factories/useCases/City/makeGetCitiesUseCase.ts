import { GetAllCitiesUseCase } from "@/data/usecases/city/getCityUsCase"
import { makeCityRepository } from "../../repositories/makeCityRepository"

export const makegetCitiesUseCase =() => {
    return new GetAllCitiesUseCase(makeCityRepository())
}