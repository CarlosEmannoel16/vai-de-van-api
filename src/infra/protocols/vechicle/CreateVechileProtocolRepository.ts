import { Vehicle } from "@prisma/client";

export interface ICreateVechileProtocolRepository {
  create(
    data: ICreateVechileProtocolRepository.params,
  ): Promise<Vehicle>;
}

export namespace ICreateVechileProtocolRepository {
  export type params = {
    amount_of_accents: number;
    plate: string;
    with_air: boolean;
    cor: string;
    idDriver: string
    ownerId: string
  };

}
