export interface ICreateVehicle {
  execute(data: ICreateVehicle.Params): Promise<ICreateVehicle.Result>;
}

export namespace ICreateVehicle {
  export type Params = {
    quantitySeats: number;
    plate: string;
    withAir: boolean;
    color: string;
    ownerName: string;
    description: string;
  };

  export type Result = {
    amount_of_accents: number;
    cor: string;
    created_at: Date;
    description: string;
    id: string;
    ownerName: string;
    plate: string;
    update_at: Date;
    with_air: boolean;
  };
}
