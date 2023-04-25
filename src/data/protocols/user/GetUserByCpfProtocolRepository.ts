export interface IGetUserByCpfProtocolRepository {
  getByCpf(cpf: string): Promise<IGetUserByCpfProtocolRepository.Result>;
}

export namespace IGetUserByCpfProtocolRepository {
  export type Result = {
    name: string;
  };
}
