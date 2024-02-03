import { VehicleInterface } from "@/domain/Vehicle/interface/VehicleInterface";

export interface GetVehicleAvailableByRouteProtocolRepository {
  getOneByParams(routeId: string): Promise<VehicleInterface>;
}

