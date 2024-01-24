import { Driver } from '@/domain/Driver/entity/Driver';
import { DriverFactory } from '@/domain/Driver/factory/DriverFactory';
import { IDriverProtocolRepository } from '@/domain/Driver/repositories';
import { PrismaClient } from '@prisma/client';

const database = new PrismaClient();
export class DriverRepository implements IDriverProtocolRepository {
  async findAll(): Promise<Driver[]> {
    const data = await database.driver.findMany({
      include: {
        User: true,
      },
    });
    return DriverFactory.createMany(
      data.map(item => ({
        id: item.id,
        name: item.User.name,
      })),
    );
  }
  async create(data: Driver): Promise<Driver> {
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
