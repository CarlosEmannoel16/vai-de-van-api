import { Vehicle } from "@/domain/Vehicle/entity/Vehicle";

export interface IAssociateAndCreateVehicleDriverRepository {
  associateAndCreate(data: IAssociateAndCreateVehicleDriverRepository.Params): Promise<Vehicle>;
}

export namespace IAssociateAndCreateVehicleDriverRepository {

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
