import { UserModel } from '@/domain/models';

export interface IGetUserByIdProtocolRepository {
  getById(idUser: string): Promise<IGetUserByIdProtocolRepository.Result>;
}

export namespace IGetUserByIdProtocolRepository {
  export type Result = UserModel;
}
