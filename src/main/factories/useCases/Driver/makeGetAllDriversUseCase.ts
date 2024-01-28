import { GetAllDriversUseCase } from "@/data/usecases/driver/GetAllDriversUseCase"
import { DriverRepository } from "@/infra/DriverRepository"

export const makeGetAllDriversUseCase = () => {
    return new GetAllDriversUseCase(new DriverRepository())
}
