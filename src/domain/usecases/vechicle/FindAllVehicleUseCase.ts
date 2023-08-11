import { Vehicle } from "@prisma/client";

export interface IFindAllVehiclesUseCase {
  execure(): Promise<Vehicle[]>;
}
