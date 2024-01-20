import { Driver } from '@/domain/Driver/entity/Driver';
import { IDriverProtocolRepository } from '@/domain/Driver/repositories';
import { PrismaClient } from '@prisma/client';

const database = new PrismaClient();
export class DriverRepository implements IDriverProtocolRepository {
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
