import { Vehicle } from "@/domain/Vehicle/entity/Vehicle";

export interface GetVehicleAvailableByRouteProtocolRepository {
  getOneByParams(routeId: string): Promise<Vehicle>;
}

