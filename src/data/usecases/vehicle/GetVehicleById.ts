import { BusInterface } from '@/domain/Vehicle/interface/BusInterface';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle/VehicleProtocolRepository';

export class GetVehicleByIdUseCase {
  constructor(
    private readonly getVehicleById: IVehicleProtocolRepository<BusInterface>,
  ) {}

  async execute(id: string) {
    const result = await this.getVehicleById.getById(id);
  }
}
