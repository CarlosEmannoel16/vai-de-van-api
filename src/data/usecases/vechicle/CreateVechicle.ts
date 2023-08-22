import { ICreateVechicle } from '@/domain/usecases/vechicle/CreateVechicleUseCase';
import { ICreateVechileProtocolRepository } from '@/infra/protocols/vechicle/CreateVechileProtocolRepository';
import { Vehicle } from '@prisma/client';

export class CreateVechicleUseCase implements ICreateVechicle {
  constructor(
    private createVechicleRepository: ICreateVechileProtocolRepository,
  ) {}
  async execute(data: ICreateVechicle.Params): Promise<Vehicle> {
    const result = await this.createVechicleRepository.create({
      ...data,
      amount_of_accents: Number(data.amount_of_accents),

    });
    return result;
  }
}
