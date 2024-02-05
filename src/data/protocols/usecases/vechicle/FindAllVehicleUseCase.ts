
export interface IFindAllVehiclesUseCase {
  execute(): Promise<IFindAllVehiclesUseCase.Result[]>;
}

export namespace IFindAllVehiclesUseCase {
  export type Result = {
    id: string;
    name: string;
    color: string;
    plate: string;
    quantitySeats: number;
    ownerName: string;
  };
}
