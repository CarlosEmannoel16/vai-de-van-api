import { AppDataSource } from '@DataSource/postgres';
import { User } from '@entities/postgres/';
import {
  IGetUserByIdProtocolRepository,
  ICreateUserProtocolRepository,
  IGetUserByCpfProtocolRepository,
  IGetUserByNameProtocolRepository,
} from '@data/protocols/user/';

const getRepository = AppDataSource.getRepository;
export class UserRepository
  implements
    ICreateUserProtocolRepository,
    IGetUserByIdProtocolRepository,
    IGetUserByNameProtocolRepository,
    IGetUserByCpfProtocolRepository
{
  async create(
    data: ICreateUserProtocolRepository.Params,
  ): Promise<ICreateUserProtocolRepository.Result> {
    const user = await getRepository(User).save(data);
    const { id, name, type } = user;
    return { id, name, type };
  }

  async getById(
    idUser: string,
  ): Promise<IGetUserByIdProtocolRepository.Result> {
    const user = await getRepository(User).findOne({ where: { id: idUser } });
    return user;
  }

  async getUserByName(
    nameUser: string,
  ): Promise<IGetUserByNameProtocolRepository.Result> {
    const user = await getRepository(User).findOne({
      where: { name: nameUser },
    });
    const { email, id, name, phone, type, cpf } = user;
    return {
      email,
      id,
      name,
      phone,
      type,
      cpf,
    };
  }

  async getByCpf(cpf: string): Promise<IGetUserByCpfProtocolRepository.Result> {
    const user = await getRepository(User).findOne({ where: { cpf } });
    return { name: user.name };
  }
}
