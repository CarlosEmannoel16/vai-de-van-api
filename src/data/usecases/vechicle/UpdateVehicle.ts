import { ICreateVechicle } from '@/domain/usecases/vechicle/CreateVechicleUseCase';
import { ICreateVechileProtocolRepository } from '@/infra/protocols/vechicle/CreateVechileProtocolRepository';
import { IUpdateVehicleRepository } from '@/infra/protocols/vechicle/UpdateVehicleProtocolRepository';
import { Vehicle } from '@prisma/client';

export class UpdateVehicleUseCase {
  constructor(
    private updateVehicleRepository: IUpdateVehicleRepository,
  ) {}
  async execute(data: Vehicle): Promise<Vehicle> {
    const result = await this.updateVehicleRepository.update({
      ...data,
      amount_of_accents: Number(data.amount_of_accents),
    });
    return result;
  }
}
