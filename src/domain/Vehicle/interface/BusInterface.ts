import { VehicleInterface } from "./VehicleInterface";

export interface BusInterface extends VehicleInterface {
  get quantitySeats(): number;
  get withAir(): boolean;
  get plate(): string;

}
