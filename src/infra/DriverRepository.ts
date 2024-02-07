import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';
import { PrismaClient } from '@prisma/client';
import { IDriverProtocolRepository } from './protocols/drivers';
import { PersonFactory } from '@/domain/Person/factory/PersonFactory';

const database = new PrismaClient();
export class DriverRepository implements IDriverProtocolRepository {

  async findById(id: string): Promise<DriverInterface> {
    const data = await database.driver.findFirst({
      where: {
        id,
      },
      include: {
        User: true,
      },
    });

    return PersonFactory.create('driver', {
      cpf: data.User.cpf,
      email: data.User.email,
      id: data.id,
      name: data.User.name,
      cnh: data.cnh,
      dateOfBirth: data.User.date_of_birth,
      password: data.User.password,
      phone: data.User.phone,
    }) as DriverInterface;
  }
  async findAll(): Promise<DriverInterface[]> {
    const data = await database.driver.findMany({
      include: {
        User: true,
      },
    });
    return PersonFactory.createMany(
      'driver',
      data.map(d => ({
        cpf: d.User.cpf,
        email: d.User.email,
        id: d.id,
        name: d.User.name,
        cnh: d.cnh,
        dateOfBirth: d.User.date_of_birth,
        phone: d.User.phone,
      })),
    ) as DriverInterface[];
  }
  async create(data: DriverInterface): Promise<DriverInterface> {
    await database.driver.create({
      data: {
        cnh: data.cnh,
        cnhDateOfIssue: data.cnhDateOfIssue,
        cnhExpirationDate: data.cnhExpirationDate,
        created_at: new Date(),
        id: data.id,
        idUser: data.id,
      },
    });

    return data;
  }
}
