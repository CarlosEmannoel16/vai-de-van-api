export interface ILisTravelById {
  execute(id: string): Promise<ILisTravelById.Result>;
}

export namespace ILisTravelById {
  export type Result = {
    id: string;
    departureDate: Date;
    arrivalDate: Date;
    driverId: string;
    driverName: string;
    routeId: string;
    vehicleId: string;
    vehicleName: string;
    amount_of_accents: number;
    update_at: Date;
    created_at: Date;
  };
}
