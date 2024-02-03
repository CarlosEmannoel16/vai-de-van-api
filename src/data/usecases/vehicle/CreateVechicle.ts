import { ICreateVehicle } from '@/data/protocols/usecases/vechicle/CreateVechicleUseCase';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';
import { Vehicle } from '@prisma/client';

export class CreateVehicleUseCase implements ICreateVehicle {
  constructor(
    private readonly vehicleRepository: IVehicleProtocolRepository,
    private readonly userRepository: IUserProtocolRepository,
  ) {}
  async execute(data: ICreateVehicle.Params): Promise<Vehicle> {
    const existsVehiclePlate = await this.vehicleRepository.getOneByParams({
      plate: data.plate,
    });

    if (existsVehiclePlate) throw new Error('Placa já cadastrada');


    const result = await this.vehicleRepository.create({
      ...data,
      amount_of_accents: Number(data.amount_of_accents),
    });

    return {
      amount_of_accents: result.quantitySeats,
      cor: result.color,
      created_at: result.dateOfCreation,
      description: result.description,
      id: result.id,
      ownerName: result.ownerName,
      plate: result.plate,
      update_at: result.lastUpdate,
      with_air: result.withAir,
    };
  }
}
