export interface ISearchTravelsUseCaseProtocol {
  execute(
    data: ISearchTravelsUseCaseProtocol.Params,
  ): Promise<ISearchTravelsUseCaseProtocol.Result[] | undefined>;
}

export namespace ISearchTravelsUseCaseProtocol {
  export type Params = {
    origin: string;
    destiny: string;
    dateOfTravel: Date;
  };

  export type Result = {
    nameDestiny: string;
    nameOrigin: string;
    dateOfDeparture: string;
    value: string;
    driver: string;
    vehicle: {
      classification: number;
    };
    quantity: number;
  };
}
