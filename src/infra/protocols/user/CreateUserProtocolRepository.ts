export interface ICreateUserProtocolRepository {
  create(
    data: ICreateUserProtocolRepository.Params,
  ): Promise<ICreateUserProtocolRepository.Result>;
}

export namespace ICreateUserProtocolRepository {
  export type Params = {
    name: string;
    type: string;
    email: string;
    phone: string;
    date_of_birth: Date;
    cpf: string;
    password: string;
  };

  export type Result = {
    id: string;
    name: string;
    type: string;
    email: string;
    phone: string;
    date_of_birth: Date;
    cpf: string;
  };
}
