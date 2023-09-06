import { Vehicle } from "@prisma/client";

export interface ICreateVehicleProtocolRepository {
  create(
    data: ICreateVehicleProtocolRepository.params,
  ): Promise<Vehicle>;
}

export namespace ICreateVehicleProtocolRepository {
  export type params = {
    amount_of_accents: number;
    plate: string;
    with_air: boolean;
    cor: string;
    ownerId: string
    description: string
  };

}
