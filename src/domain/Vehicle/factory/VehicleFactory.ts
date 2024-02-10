import { v4 } from 'uuid';
import { Bus } from '../entity/Bus';
import { CreateVehicleType } from '../interface/VehicleFactoryInterface';
import { VehicleInterface } from '../interface/VehicleInterface';
import { BusInterface } from '../interface/BusInterface';

export class VehicleFactory {
  static bus(data: CreateVehicleType): VehicleInterface | BusInterface {
    let id = data.id;
    if (!data.id) id = v4();

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
  }
}
