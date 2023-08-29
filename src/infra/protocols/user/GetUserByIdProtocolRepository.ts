import { UserModel } from '@/domain/models';
import { Travel, User, Vehicle } from '@prisma/client';
import { Driver } from 'typeorm';

export interface IGetUserByIdProtocolRepository {
  getById(idUser: string): Promise<IGetUserByIdProtocolRepository.Result>;
}


export namespace IGetUserByIdProtocolRepository{
  export type Result = 
    User & {
      Driver: Driver[];
      Vehicle: Vehicle[];
     
    }
}




