import { IFindAllVehiclesUseCase } from '@/data/protocols/usecases/vechicle/FindAllVehicleUseCase';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle';

export class FindAllVehiclesUseCase implements IFindAllVehiclesUseCase {
  constructor(private readonly findVehicle: IVehicleProtocolRepository) {}
  async execute(): Promise<IFindAllVehiclesUseCase.Result[]> {
    const vehicles = await this.findVehicle.getAll();
    return vehicles.map(vehicle => ({
      color: vehicle.color,
      id: vehicle.id,
      name: vehicle.name,
      plate: vehicle.plate,
      quantitySeats: vehicle.quantitySeats,
      ownerId: vehicle.ownerId,

    }));
  }
}
