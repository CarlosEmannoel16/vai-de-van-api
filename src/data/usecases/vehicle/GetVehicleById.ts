import { GetVehicleByIdProtocolRepository } from '@/infra/protocols/vechicle/GetVehicleByIdProtocolRepository';

export class GetVehicleByIdUseCase {
  constructor(
    private readonly getVehicleById: GetVehicleByIdProtocolRepository,
  ) {}

  execute(id: string) {
    return this.getVehicleById.getById(id);
  }
}
