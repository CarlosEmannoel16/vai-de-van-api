import { VechicleRepository } from "@infra/VechicleRepository"

export const makeVehicleRepository = (): VechicleRepository =>{
    return new VechicleRepository()
}