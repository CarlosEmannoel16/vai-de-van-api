import { Vehicle } from "@prisma/client";

export interface IDeleteVehicleUseCase {
  execute(id: string): Promise<Vehicle>;
}
