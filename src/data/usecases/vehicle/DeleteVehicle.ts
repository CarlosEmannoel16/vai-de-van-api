import { IDeleteVehicleUseCase } from '@/data/protocols/usecases/vechicle/DeleteVehicleUseCase';
import { BusInterface } from '@/domain/Vehicle/interface/BusInterface';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle/VehicleProtocolRepository';

//Não é possível deletar um veículo que está associado a uma viagem ativa

export class DeleteVehicleUseCase implements IDeleteVehicleUseCase {
  constructor(
    private readonly vehicleRepository: IVehicleProtocolRepository<BusInterface>,
  ) {}
  async execute(id: string): Promise<boolean> {
    const hasTravelActive = await this.vehicleRepository.getTravelsActives(id);
    if (hasTravelActive.length > 0) {
      throw new Error(
        'Não é possível deletar um veículo que está associado a uma viagem ativa',
      );
    }
    const result = await this.vehicleRepository.deleteById(id);
    return result;
  }
}
