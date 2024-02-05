import { SituationVehicleType } from './SituationVehicleInterface';

export interface VehicleInterface {
  get description(): string;
  get id(): string;
  get color(): string;
  get situation(): SituationVehicleType;
  get quantitySeats(): number;
  get dateOfCreate(): Date;
  get dateOfUpdate(): Date;
  get ownerName(): string;
}
