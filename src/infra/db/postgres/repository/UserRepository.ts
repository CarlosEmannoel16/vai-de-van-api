import { PrismaClient } from '@prisma/client';
import {
  IGetUserByIdProtocolRepository,
  ICreateUserProtocolRepository,
  IGetUserByCpfProtocolRepository,
  IGetUserByNameProtocolRepository,
  IGetUserByEmailProtocolRepository,
  IGetAllUsersProtocolRepository,
} from '@/data/protocols/user/';

const prisma = new PrismaClient();
export class UserRepository
  implements
    ICreateUserProtocolRepository,
    IGetUserByIdProtocolRepository,
    IGetUserByNameProtocolRepository,
    IGetUserByCpfProtocolRepository,
    IGetUserByEmailProtocolRepository,
    IGetAllUsersProtocolRepository
{
  async create({
    cpf,
    date_of_birth,
    email,
    name,
    password,
    phone,
    type,
  }: ICreateUserProtocolRepository.Params): Promise<ICreateUserProtocolRepository.Result> {
    const user = await prisma.user.create({
      data: { cpf, date_of_birth, email, name, password, phone, type },
    });
    return user;
  }
  async getById(
    idUser: string,
  ): Promise<IGetUserByIdProtocolRepository.Result> {
    const user = await prisma.user.findUnique({ where: { id: idUser } });
    return user;
  }

  async getUserByName(
    nameUser: string,
  ): Promise<IGetUserByNameProtocolRepository.Result | any> {
    const user = await prisma.user.findFirst({ where: { name: nameUser } });
    if (!user) return {};

    const { email, id, name, phone, type, cpf, date_of_birth } = user;
    return {
      email,
      id,
      name,
      phone,
      type,
      cpf,
      date_of_birth,
    };
  }

  async getByCpf(
    cpfUser: string,
  ): Promise<IGetUserByCpfProtocolRepository.Result | any> {
    const user = await prisma.user.findFirst({ where: { cpf: cpfUser } });
    if (!user) return {};
    const { cpf, date_of_birth, email, id, name, phone, type } = user;
    return { cpf, date_of_birth, email, id, name, phone, type };
  }

  async getUserByEmail(
    emailUser: string,
  ): Promise<IGetUserByEmailProtocolRepository.Result | any> {
    const user = await prisma.user.findFirst({ where: { email: emailUser } });
    if (!user) return {};
    const { cpf, date_of_birth, email, id, name, phone, type } = user;
    return { cpf, date_of_birth, email, id, name, phone, type };
  }

  async getAll(): Promise<IGetAllUsersProtocolRepository.Result[]> {
    const users = await prisma.user.findMany();
    return users;
  }
}
