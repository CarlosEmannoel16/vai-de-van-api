export interface IGetUserByEmailProtocolRepository {
  getUserByEmail(
    emailUser: string,
  ): Promise<IGetUserByEmailProtocolRepository.Result>;
}

export namespace IGetUserByEmailProtocolRepository {
  export type Result = {
    id: string;
    name: string;
    email: string;
    phone: string;
    type: string;
    cpf: string;
    date_of_birth: Date;
  };
}
