import { ICreateVehicle } from '@/data/protocols/usecases/vechicle/CreateVechicleUseCase';
import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { BusInterface } from '@/domain/Vehicle/interface/BusInterface';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle/VehicleProtocolRepository';
import { Vehicle } from '@prisma/client';
import { v4 } from 'uuid';

export class CreateVehicleUseCase implements ICreateVehicle {
  constructor(
    private readonly vehicleRepository: IVehicleProtocolRepository<BusInterface>,
  ) {}
  async execute(data: ICreateVehicle.Params): Promise<Vehicle> {
    const existsVehiclePlate = await this.vehicleRepository.getOneByParams({
      plate: data.plate,
    });

    if (existsVehiclePlate) throw new Error('Placa já cadastrada');

    const vehicle = VehicleFactory.create('bus', {
      id: v4(),
      description: data.description,
      quantitySeats: data.amount_of_accents,
      color: data.cor,
      ownerName: data.ownerName,
      situation: 'available',
    }) as BusInterface;

    const result = await this.vehicleRepository.create(vehicle);

    return {
      amount_of_accents: result.quantitySeats,
      cor: result.color,
      created_at: result.dateOfCreate,
      description: result.description,
      id: result.id,
      ownerName: result.ownerName,
      plate: result.plate,
      update_at: result.dateOfUpdate,
      with_air: result.withAir,
    };
  }
}
