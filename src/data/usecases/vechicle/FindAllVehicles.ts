import { IFindAllVehiclesUseCase } from "@/domain/usecases/vechicle/FindAllVehicleUseCase";
import { GetVechicleProtocolRepository } from "@/infra/protocols/vechicle";
import { Vehicle } from "@prisma/client";

export class FindAllVehiclesUseCase implements IFindAllVehiclesUseCase{
    constructor(private readonly findVehicle: GetVechicleProtocolRepository){}
    async execure(): Promise<Vehicle[]> {
      return this.findVehicle.getAll();
    }
}