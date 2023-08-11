import {  GetAllVehiclesController } from "@/presentation/controller/vehicle/ListVehicleController"
import { makeGetAllVehiclesUseCase } from "../useCases/makeGetAllVehiclesUseCase"

export const makeGetAllVehiclesController = () => {
    return new GetAllVehiclesController(makeGetAllVehiclesUseCase())
}