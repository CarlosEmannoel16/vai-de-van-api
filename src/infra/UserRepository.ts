import { Prisma, PrismaClient, User } from '@prisma/client';
import {
IUserProtocolRepository
} from '@/infra/protocols';
import { IUpdateUserProtocolRepository } from './protocols/user/UpdateUserProtocolRepository';
import { UserModel } from '@/domain/models';
import { ICreateDriverProtocolRepository } from '@infra/protocols/drivers';
import { IGetUserByParamsProtocolRepository } from './protocols/user/GetUserByParamsProtocolRepository';
import { ICreateUserProtocolRepository } from './protocols/user/CreateUserProtocolRepository';
import { IGetUserByNameProtocolRepository } from './protocols/user/GetUserByNameProtocolRepository';
import { IGetUserByCpfProtocolRepository } from './protocols/user/GetUserByCpfProtocolRepository';
import { IGetUserByEmailProtocolRepository } from './protocols/user/GetUserByEmailProtocolRepository';
import { IGetAllUsersProtocolRepository } from './protocols/user/GetAllUsersProtocolRepository';

const prisma = new PrismaClient();
export class UserRepository
  implements
  IUserProtocolRepository
   
{
  async getUserByParams(data: IGetUserByParamsProtocolRepository.Params): Promise<User> {
   return prisma.user.findFirst({where: data});
  }
  async delete(id: string): Promise<boolean> {
    const result = await prisma.user.delete({
      where: { id },
      include: { Driver: { where: { idUser: id } } },
    });
    return result ? true : false;
  }
  async update(
    data: IUpdateUserProtocolRepository.Params,
  ): Promise<IUpdateUserProtocolRepository.Result> {
    const { id, cpf, date_of_birth, email, name, password, phone, type } = data;
    const user = prisma.user.update({
      data: {
        cpf,
        date_of_birth,
        email,
        name,
        password,
        phone,
        type,
      },
      where: {
        id: id,
      },
    });
    return user;
  }
  async createDriver(
    data: ICreateDriverProtocolRepository.Params,
  ): Promise<User> {
    const {
      cnh,
      cpf,
      date_of_birth,
      email,
      name,
      password,
      phone,
      cnhDateOfIssue,
      cnhExpirationDate,
    } = data;
    return prisma.user.create({
      data: {
        cpf,
        date_of_birth,
        email,
        name,
        password,
        created_at: new Date(),
        update_at: new Date(),
        phone,
        type: 'DRIVER',
        Driver: { create: { cnh, cnhDateOfIssue, cnhExpirationDate } },
      },
    });
  }
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
  async getById(idUser: string): Promise<any> {
    return await prisma.user.findFirst({
      where: { id: idUser },
      select: {
          cpf: true,
          date_of_birth: true,
          Driver: true,
          email: true,
          name: true,
          id: true,
          password: true,
          phone: true,
          type: true,
          Vehicle: true,
          created_at: true,
          update_at: true,
      },
    
     
    });
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
    const { cpf, date_of_birth, email, id, name, phone, type, password } = user;
    return { cpf, date_of_birth, email, id, name, phone, type, password };
  }

  async getAll(): Promise<IGetAllUsersProtocolRepository.Result[]> {
    const data = await prisma.driver.findMany({
      select: {
        User: {
          select: {
            cpf: true,
            email: true,
            created_at: true,
            date_of_birth: true,
            id: true,
            name: true,
            phone: true,
            type: true,
            update_at: true,
            Vehicle: true,
            Driver: {
              select: {
                cnh: true,
                cnhDateOfIssue: true,
                cnhExpirationDate: true,
                Travel: true,
              },
            },
          },
        },
      },
    });
    return data;
  }
}
