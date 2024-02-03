import { BusInterface } from './BusInterface';
import { SituationVehicleType } from './SituationVehicleInterface';
import { VehicleInterface } from './VehicleInterface';
import { VehicleType } from './VehicleType';

export type CreateVehicleType = {
  id: string;
  description: string;
  color?: string;
  situation?: SituationVehicleType;
  plate?: string;
  withAir?: boolean;
  quantitySeats: number;
  ownerName?: string;
  createdAt?: Date;
  dateOfUpdate?: Date;
};

export interface VehicleFactoryInterface {
  create(vehicleType: VehicleType, data: CreateVehicleType): VehicleInterface | BusInterface;
}
