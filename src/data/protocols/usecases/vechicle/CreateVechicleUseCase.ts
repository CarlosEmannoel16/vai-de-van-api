import { Vehicle } from "@prisma/client";

export interface ICreateVehicle {
    execute(data: ICreateVehicle.Params): Promise<Vehicle>;
  }

  export namespace ICreateVehicle {
    export type Params = {
        amount_of_accents: number;
        plate: string;
        with_air: boolean;
        cor: string;
        ownerName: string
        description: string
    };

  }
