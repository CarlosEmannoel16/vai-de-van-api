import { GetVehicleByIdProtocolRepository } from '@/infra/protocols/vechicle/GetVechicleByIdProtocolRepository';

export class GetVehicleByIdUseCase {
  constructor(
    private readonly getVehicleById: GetVehicleByIdProtocolRepository,
  ) {}

  execute(id: string) {
    return this.getVehicleById.getById(id);
  }
}
