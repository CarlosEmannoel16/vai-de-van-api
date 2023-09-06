import { ICreateVehicle } from '@/domain/usecases/vechicle/CreateVechicleUseCase';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';
import { ICreateVehicleProtocolRepository } from '@/infra/protocols/vechicle/CreateVechileProtocolRepository';
import { Vehicle } from '@prisma/client';

export class CreateVehicleUseCase implements ICreateVehicle {
  constructor(
    private vehicleRepository: IVehicleProtocolRepository,
    private readonly userRepository: IUserProtocolRepository,
  ) {}
  async execute(data: ICreateVehicle.Params): Promise<Vehicle> {
    const existsVehiclePlate = await this.vehicleRepository.getOneByParams({
      plate: data.plate,
    });

    if (existsVehiclePlate) throw new Error('Placa já cadastrada');


    const user = await this.userRepository.getById(data.ownerId);
    if(!user) throw new Error('Proprietário não encontrado');

    const result = await this.vehicleRepository.create({
      ...data,
      amount_of_accents: Number(data.amount_of_accents),
    });
    return result;
  }
}
