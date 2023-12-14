import { Vehicle } from '../entity/Vehicle';

export type createVehicleType = {
  id: string;
  name: string;
  quantitySeats: number;
  color: string;
  withAir: boolean;
};

export class VehicleFactory {
  static create({ id = undefined, name, quantitySeats }: createVehicleType) {
    return new Vehicle(id, name, quantitySeats);
  }
}
