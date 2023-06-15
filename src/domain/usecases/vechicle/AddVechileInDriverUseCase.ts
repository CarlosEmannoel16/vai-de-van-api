import { Vehicle } from "@prisma/client";

export interface IAddVechicleInDriver {
    execute({idDrive, idVechile}: IAddVechicleInDriver.Params): Promise<Vehicle>;
  }
  export namespace IAddVechicleInDriver {
  export type Params ={
    idDrive: string
    idVechile: string
  }

  }
  