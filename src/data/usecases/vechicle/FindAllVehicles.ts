import { IFindAllVehiclesUseCase } from "@/data/protocols/usecases/vechicle/FindAllVehicleUseCase";
import { IVehicleProtocolRepository } from "@/infra/protocols/vechicle";
import { Vehicle } from "@prisma/client";

export class FindAllVehiclesUseCase implements IFindAllVehiclesUseCase{
    constructor(private readonly findVehicle: IVehicleProtocolRepository){}
    async execure(): Promise<Vehicle[]> {
      return this.findVehicle.getAll();
    }
}
