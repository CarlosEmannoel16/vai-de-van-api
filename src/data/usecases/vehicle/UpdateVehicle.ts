import { VehicleFactory } from '@/domain/Vehicle/factory/VehicleFactory';
import { VehicleInterface } from '@/domain/Vehicle/interface/VehicleInterface';
import { IVehicleProtocolRepository } from '@/infra/protocols/vechicle/VehicleProtocolRepository';

export class UpdateVehicleUseCase {
  constructor(
    private vehicleRepository: IVehicleProtocolRepository<VehicleInterface>,
  ) {}

  async execute(data: VehicleInterface): Promise<VehicleInterface> {
    const vehicle = await this.vehicleRepository.getById(data.id);

    if (!vehicle) throw new Error('Vehicle not found');

    vehicle.color = data.color;
    vehicle.dateOfUpdate = new Date();
    vehicle.description = data.description;
    vehicle.ownerName = data.ownerName;
    vehicle.quantitySeats = data.quantitySeats;

    const result = await this.vehicleRepository.update(vehicle);
    return result;
  }
}
