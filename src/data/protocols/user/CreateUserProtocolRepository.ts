export interface ICreateUserProtocolRepository {
  create(
    data: ICreateUserProtocolRepository.Params,
  ): Promise<ICreateUserProtocolRepository.Result>;
}

export namespace ICreateUserProtocolRepository {
  export type Params = {
    name: string;
    password: string;
    email?: string;
    phone: string;
    type: string;
    cpf: string;
  };

  export type Result = {
    id: string;
    name: string;
    type: string;
  };
}
