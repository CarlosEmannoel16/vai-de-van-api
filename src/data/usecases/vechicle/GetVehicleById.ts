import { GetVechicleByIdProtocolRepository } from '@/infra/protocols/vechicle/GetVechicleByIdProtocolRepository';

export class GetVehicleByIdUseCase {
  constructor(
    private readonly getVehicleById: GetVechicleByIdProtocolRepository,
  ) {}

  execute(id: string) {
    return this.getVehicleById.getById(id);
  }
}
