export interface GetTravelsActivesFromVehicleRepository {
  getTravelsActives(
    id: string,
  ): Promise<GetTravelsActivesFromVehicleRepository.Result>;
}

export namespace GetTravelsActivesFromVehicleRepository {
  export type Result = {
    status: string;
  }[];
}
