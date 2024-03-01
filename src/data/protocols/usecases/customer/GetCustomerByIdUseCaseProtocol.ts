export interface GetCustomerByIdUseCaseProtocol {
  execute(
    data: GetCustomerByIdUseCaseProtocol.Params,
  ): Promise<GetCustomerByIdUseCaseProtocol.Result>;
}


export namespace GetCustomerByIdUseCaseProtocol {
  export type Params = {
    id: string;
  };

  export type Result = {
    id: string;
    name: string;
    email: string;
    cpf: string;
    dateOfBirth: Date;
    phone: string;
  };
}
