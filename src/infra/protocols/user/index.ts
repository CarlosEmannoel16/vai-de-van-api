import { ICreateUserProtocolRepository } from '@/infra/protocols/user/CreateUserProtocolRepository';
import { IDeleteUserProtocolRepository } from '@/infra/protocols/user/DeleteUserProtocolRepository';
import { IGetAllUsersProtocolRepository } from '@/infra/protocols/user/GetAllUsersProtocolRepository';
import { IGetUserByCpfProtocolRepository } from '@/infra/protocols/user/GetUserByCpfProtocolRepository';
import { IGetUserByEmailProtocolRepository } from '@/infra/protocols/user/GetUserByEmailProtocolRepository';
import { IGetUserByIdProtocolRepository } from '@/infra/protocols/user/GetUserByIdProtocolRepository';
import { IGetUserByNameProtocolRepository } from '@/infra/protocols/user/GetUserByNameProtocolRepository';
import { IGetUserByParamsProtocolRepository } from '@/infra/protocols/user/GetUserByParamsProtocolRepository';
import { IUpdateUserProtocolRepository } from '@/infra/protocols/user/UpdateUserProtocolRepository';

export interface IUserProtocolRepository
  extends ICreateUserProtocolRepository,
    IDeleteUserProtocolRepository,
    IGetAllUsersProtocolRepository,
    IGetUserByCpfProtocolRepository,
    IGetUserByEmailProtocolRepository,
    IGetUserByIdProtocolRepository,
    IGetUserByNameProtocolRepository,
    IGetUserByParamsProtocolRepository,
    IUpdateUserProtocolRepository {}
