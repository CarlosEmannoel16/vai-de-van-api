import { VehicleFactoryInterface } from "@/domain/Vehicle/interface/VehicleFactoryInterface";

export interface GetVehicleByParamsProtocolRepository {
  getOneByParams(data: GetVehicleByParamsProtocolRepository.Params): Promise<VehicleFactoryInterface>;
}

export namespace GetVehicleByParamsProtocolRepository {
  export type Params = {
    id?: string;
    plate?: string;
  }
}
