export interface ICreateStateProtocolRepository {
  create(
    data: ICreateStateProtocolRepository.Params,
  ): Promise<ICreateStateProtocolRepository.Result>;
}

export namespace ICreateStateProtocolRepository {
  export type Params = {
    name: string;
    uf: string;
  };
  export type Result = {
    id: string;
    name: string;
    uf: string;
  };
}
