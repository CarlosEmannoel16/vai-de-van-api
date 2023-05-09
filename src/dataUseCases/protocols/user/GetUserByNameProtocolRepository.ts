import { UserModel } from 'src/domain/models';

export interface IGetUserByNameProtocolRepository {
  getUserByName(
    nameUser: string,
  ): Promise<IGetUserByNameProtocolRepository.Result>;
}

export namespace IGetUserByNameProtocolRepository {
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
