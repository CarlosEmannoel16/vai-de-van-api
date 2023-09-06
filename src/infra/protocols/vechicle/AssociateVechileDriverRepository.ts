import { Vehicle } from "@prisma/client";

export interface IAssociateVehicleDriverRepository {
    associate(data: IAssociateVehicleDriverRepository.Params): Promise<Vehicle>;
  }
  export namespace IAssociateVehicleDriverRepository {
 
    export type Params = {
     idVechile: string
     idDriver: string
    };
  }
  