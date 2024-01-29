import { IDeleteVehicleUseCase } from '@/data/protocols/usecases/vechicle/DeleteVehicleUseCase';
import { IDeleteVehicleRepository } from '@/infra/protocols/vechicle/DeleteVehicleRepository';
import { GetTravelsActivesFromVehicleRepository } from '@/infra/protocols/vechicle/GetTravelsActivesFromVehicleRepository';
import { Vehicle } from '@prisma/client';

//Não é possível deletar um veículo que está associado a uma viagem ativa

export class DeleteVehicleUseCase implements IDeleteVehicleUseCase {
  constructor(
    private readonly deleteVehicleRepository: IDeleteVehicleRepository,
    private readonly getTRavelsActivesByVehicle: GetTravelsActivesFromVehicleRepository,
  ) {}
  async execute(id: string): Promise<boolean> {
    const hasTravelActive =
      await this.getTRavelsActivesByVehicle.getTravelsActives(id);
    if (hasTravelActive.length > 0) {
      throw new Error(
        'Não é possível deletar um veículo que está associado a uma viagem ativa',
      );
    }
    const result = await this.deleteVehicleRepository.deleteById(id);
    return result;
  }
}
