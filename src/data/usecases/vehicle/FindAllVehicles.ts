import { IFindAllVehiclesUseCase } from '@/data/protocols/usecases/vechicle/FindAllVehicleUseCase';
import { BusInterface } from '@/domain/Vehicle/interface/BusInterface';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle/VehicleProtocolRepository';

export class FindAllVehiclesUseCase implements IFindAllVehiclesUseCase {
  constructor(
    private readonly findVehicle: IVehicleProtocolRepository<BusInterface>,
  ) {}
  async execute(): Promise<IFindAllVehiclesUseCase.Result[]> {
    const vehicles = await this.findVehicle.getAll();
    return vehicles.map(vehicle => ({
      color: vehicle.color,
      id: vehicle.id,
      name: vehicle.description,
      plate: vehicle.plate,
      quantitySeats: vehicle.quantitySeats,
      ownerName: vehicle.ownerName,
    }));
  }
}
