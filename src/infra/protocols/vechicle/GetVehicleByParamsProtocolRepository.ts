import { Vehicle } from '@prisma/client';

export interface GetVehicleByParamsProtocolRepository {
  getOneByParams(data: GetVehicleByParamsProtocolRepository.Params): Promise<Vehicle>;
}

export namespace GetVehicleByParamsProtocolRepository {
  export type Params = {
    id?: string;
    plate?: string;
  }
}
