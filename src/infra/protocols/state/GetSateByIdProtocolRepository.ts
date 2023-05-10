export interface IGetStateByIdProtocolRepository {
  create(
    data: IGetStateByIdProtocolRepository.Params,
  ): Promise<IGetStateByIdProtocolRepository.Result>;
}

export namespace IGetStateByIdProtocolRepository {
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
