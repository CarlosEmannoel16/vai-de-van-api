import { v4 } from 'uuid';
import { Bus } from '../entity/Bus';
import {
  CreateVehicleType,
  VehicleFactoryInterface,
} from '../interface/VehicleFactoryInterface';
import { VehicleInterface } from '../interface/VehicleInterface';
import { BusInterface } from '../interface/BusInterface';

export class VehicleFactory implements VehicleFactoryInterface {
  create(
    vehicleType: 'bus',
    data: CreateVehicleType,
  ): VehicleInterface | BusInterface {
    let id = data.id;
    if (!data.id) id = v4();

    switch (vehicleType) {
      case 'bus':
        return new Bus(
          data.id,
          data.description,
          data.quantitySeats,
          data.color,
          data.situation,
          data.plate,
          data.withAir,
          data.ownerName,
          data.createdAt,
          data.dateOfUpdate,
        );
      default:
        throw new Error('Invalid vehicle type');
    }
  }
}
