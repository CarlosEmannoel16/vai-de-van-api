import { SituationVehicleType } from './SituationVehicleInterface';

export interface VehicleInterface {
  get description(): string;
  set description(description: string);
  get id(): string;
  get color(): string;
  set color(color: string);
  get situation(): SituationVehicleType;
  set situation(situation: SituationVehicleType);
  get quantitySeats(): number;
  set quantitySeats(quantitySeats: number);
  get dateOfCreate(): Date;
  set dateOfCreate(date: Date);
  get dateOfUpdate(): Date;
  set dateOfUpdate(date: Date);
  get ownerName(): string;
  set ownerName(ownerName: string);
}
