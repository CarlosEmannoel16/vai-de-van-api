import { Vehicle } from '../entity/Vehicle';

export type createVehicleType = {
  id: string;
  name: string;
  plate: string;
  quantitySeats: number;
  color: string;
  withAir: boolean;
  ownerId: string;
};

export class VehicleFactory {
  static create({
    id = undefined,
    name,
    quantitySeats,
    color,
    plate,
    withAir,
    ownerId,
  }: createVehicleType) {
    const vehicle = new Vehicle(id, name, quantitySeats);

    if (color) vehicle.color = color;
    if (plate) vehicle.plate = plate;
    if (ownerId) vehicle.ownerId = ownerId;

    return vehicle;
  }

  static createMap(data: createVehicleType[]) {
    return data.map(vehicle => this.create(vehicle));
  }
}
