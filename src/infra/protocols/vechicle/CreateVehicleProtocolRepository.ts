import { VehicleInterface } from "@/domain/Vehicle/interface/VehicleInterface";

export interface ICreateVehicleProtocolRepository {
  create(
    data: ICreateVehicleProtocolRepository.params,
  ): Promise<VehicleInterface>;
}

export namespace ICreateVehicleProtocolRepository {
  export type params = {
    amount_of_accents: number;
    plate: string;
    with_air: boolean;
    cor: string;
    ownerName: string
    description: string
  };

}
