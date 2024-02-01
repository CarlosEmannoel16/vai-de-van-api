export interface ICreateReservationUseCase {
  execute(
    data: ICreateReservationUseCase.Params,
  ): Promise<ICreateReservationUseCase.Result>;
}

export namespace ICreateReservationUseCase {
  export type Params = {
    idTravel: string;
    idStopOrigin: string;
    idStopDestiny: string;
    idCustomer: string;
    cpfCustomer: string;

  };

  export type Result = {
    id: string;
    idTravel: string;
    idStop: string;
    idCustomer: string;
    seat: number;
  };
}
