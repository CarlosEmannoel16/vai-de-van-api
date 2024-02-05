export interface ICreateVehicle {
  execute(data: ICreateVehicle.Params): Promise<ICreateVehicle.Result>;
}

export namespace ICreateVehicle {
  export type Params = {
    amount_of_accents: number;
    plate: string;
    with_air: boolean;
    cor: string;
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
