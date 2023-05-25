import { Vehicle } from "@prisma/client";

export interface IAssociateVechileDriverRepository {
    associate(data: IAssociateVechileDriverRepository.Params): Promise<Vehicle>;
  }
  export namespace IAssociateVechileDriverRepository {
 
    export type Params = {
     idVechile: string
     idDriver: string
    };
  }
  