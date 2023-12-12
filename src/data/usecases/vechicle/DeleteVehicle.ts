import { IDeleteVehicleUseCase } from "@/data/protocols/usecases/vechicle/DeleteVehicleUseCase copy";
import { IDeleteVehicleRepository } from "@/infra/protocols/vechicle/DeleteVehicleRepository";
import { Vehicle } from "@prisma/client";

export class DeleteVehicleUseCase implements IDeleteVehicleUseCase {
    constructor(private readonly deleteVehicleRepository: IDeleteVehicleRepository ){}
    async execute(id: string): Promise<Vehicle> {
       const result = await this.deleteVehicleRepository.deleteById(id)
       return result
    }
}
