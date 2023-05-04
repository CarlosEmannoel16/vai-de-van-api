export interface IGetUserByCpfProtocolRepository {
  getByCpf(cpf: string): Promise<IGetUserByCpfProtocolRepository.Result>;
}

export namespace IGetUserByCpfProtocolRepository {
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
