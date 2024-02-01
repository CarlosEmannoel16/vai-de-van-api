import { Vehicle } from "@/domain/Vehicle/entity/Vehicle";

export interface IFindVehicleAvailableByRouteUseCase {
  execute(
    routeId: string,
  ): Promise<IFindVehicleAvailableByRouteUseCase.Result[]>;
}


export namespace IFindVehicleAvailableByRouteUseCase {
  export type Params = {
    routeId: string;
  };
  export type Result = {};
}
