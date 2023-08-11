import { Vehicle } from "@prisma/client";

export interface ICreateVechicle {
    execute(data: ICreateVechicle.Params): Promise<Vehicle>;
  }
  
  export namespace ICreateVechicle {
    export type Params = {
        amount_of_accents: number;
        plate: string;
        with_air: boolean;
        cor: string;
        ownerId: string
        description: string
    };

  }
  