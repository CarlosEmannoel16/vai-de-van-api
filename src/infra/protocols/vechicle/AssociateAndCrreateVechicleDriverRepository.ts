import { Vehicle } from "@prisma/client";

export interface IAssociateAndCreateVechileDriverRepository {
  associateAndCreate(data: IAssociateAndCreateVechileDriverRepository.Params): Promise<Vehicle>;
}

export namespace IAssociateAndCreateVechileDriverRepository {

  export type Params = {
    amount_of_accents: number;
    cor: string;
    plate: string;
    with_air: boolean;
    modelId: string;
    ownerId: string,
    description: string
  };
}
