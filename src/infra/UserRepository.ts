import { PrismaClient, User } from '@prisma/client';
import { IUserProtocolRepository } from '@/infra/protocols';
import { IGetUserByParamsProtocolRepository } from './protocols/user/GetUserByParamsProtocolRepository';
import { UserInterface } from '@/domain/Person/protocols/UserInterface';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';

const prisma = new PrismaClient();
export class UserRepository implements IUserProtocolRepository {
  async getUserByParams(
    data: IGetUserByParamsProtocolRepository.Params,
  ): Promise<UserInterface> {
    const result = await prisma.user.findFirst({ where: data });

    return PersonFactory.user({
      cpf: result.cpf,
      email: result.email,
      id: result.id,
      name: result.name,
      password: result.password,
      phone: result.phone,
      dateOfBirth: result.date_of_birth,
    });
  }
  async delete(id: string): Promise<boolean> {
    const result = await prisma.user.delete({
      where: { id },
    });
    return result ? true : false;
  }
  async update(user: UserInterface): Promise<UserInterface> {
    await prisma.user.update({
      data: {
        cpf: user.cpf,
        created_at: user.dateOfCreate,
        date_of_birth: user.dateOfBirth,
        email: user.email,
        name: user.name,
        password: user.password,
        phone: user.phone,
        update_at: user.dateOfUpdate,
      },
      where: {
        id: user.id,
      },
    });
    return user;
  }
  async create(user: UserInterface): Promise<UserInterface> {
    await prisma.user.create({
      data: {
        cpf: user.cpf,
        date_of_birth: user.dateOfBirth,
        email: user.email,
        name: user.name,
        password: user.password,
        phone: user.phone,
        created_at: user.dateOfCreate,
        id: user.id,
        update_at: user.dateOfUpdate,
      },
    });
    return user;
  }
  async getById(idUser: string): Promise<any> {
    return await prisma.user.findFirst({
      where: { id: idUser },
      select: {
        cpf: true,
        date_of_birth: true,
        email: true,
        name: true,
        id: true,
        password: true,
        phone: true,
        created_at: true,
        update_at: true,
      },
    });
  }

  async getUserByName(nameUser: string): Promise<UserInterface | undefined> {
    const user = await prisma.user.findFirst({ where: { name: nameUser } });
    if (!user) return;

    return PersonFactory.user({
      cpf: user.cpf,
      email: user.email,
      id: user.id,
      name: user.name,
      password: user.password,
      dateOfBirth: user.date_of_birth,
      dateOfCreate: user.created_at,
      dateOfUpdate: user.update_at,
      phone: user.phone,
    });
  }

  async getByCpf(cpfUser: string): Promise<UserInterface | any> {
    const user = await prisma.user.findFirst({ where: { cpf: cpfUser } });
    if (!user) return;
    return PersonFactory.user({
      cpf: user.cpf,
      email: user.email,
      id: user.id,
      name: user.name,
      dateOfBirth: user.date_of_birth,
      password: user.password,
      dateOfCreate: user.created_at,
      dateOfUpdate: user.update_at,
      phone: user.phone,
    });
  }

  async getUserByEmail(emailUser: string): Promise<UserInterface | any> {
    const user = await prisma.user.findFirst({ where: { email: emailUser } });
    if (!user) return {};
    return PersonFactory.user({
      cpf: user.cpf,
      email: user.email,
      id: user.id,
      name: user.name,
      dateOfBirth: user.date_of_birth,
      password: user.password,
      dateOfCreate: user.created_at,
      dateOfUpdate: user.update_at,
      phone: user.phone,
    });
  }

  async getAll(): Promise<UserInterface[]> {
    const data = await prisma.user.findMany();
    let users: UserInterface[] = [];

    data.map(user => {
      users.push(
        PersonFactory.user({
          cpf: user.cpf,
          email: user.email,
          id: user.id,
          name: user.name,
          dateOfBirth: user.date_of_birth,
          password: user.password,
          dateOfCreate: user.created_at,
          dateOfUpdate: user.update_at,
          phone: user.phone,
        }),
      );
    });

    return users;
  }

  async getDriverById(id: string): Promise<UserInterface> {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new Error('Motorista não encontrado');
    return PersonFactory.user({
      cpf: user.cpf,
      email: user.email,
      id: user.id,
      name: user.name,
      dateOfBirth: user.date_of_birth,
      password: user.password,
      dateOfCreate: user.created_at,
      dateOfUpdate: user.update_at,
      phone: user.phone,
    });
  }
}
