import { UserModel } from '@/domain/models';

export interface IGetUserByIdProtocolRepository {
  getById(idUser: string): Promise<UserModel>;
}


