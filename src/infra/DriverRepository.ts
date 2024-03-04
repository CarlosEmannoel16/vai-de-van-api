import { DriverInterface } from '@/domain/Person/protocols/DriverInterface';
import { PrismaClient } from '@prisma/client';
import { IDriverProtocolRepository } from './protocols/drivers';
import PersonFactory, {
  PersonProps,
} from '@/domain/Person/factory/PersonFactory';

const database = new PrismaClient();
export class DriverRepository implements IDriverProtocolRepository {
  async checkExistsByCpf(cpf: string): Promise<boolean> {
    const driver = await database.driver.findFirst({
      select: {
        id: true,
      },
      where: {
        cpf,
      },
    });
    return driver !== null;
  }
  async checkExistsByCnh(cnh: string): Promise<boolean> {
    const driver = await database.driver.findFirst({
      select: {
        id: true,
      },
      where: {
        cnh,
      },
    });
    return driver !== null;
  }
  async checkExistsByEmail(email: string): Promise<boolean> {
    const driver = await database.driver.findFirst({
      select: {
        id: true,
      },
      where: {
        email,
      },
    });
    return driver !== null;
  }
  async getByEmail(email: string): Promise<DriverInterface> {
    const data = await database.driver.findFirst({
      where: {
        email,
      },
    });

    return PersonFactory.driver({
      cpf: data.cpf,
      email: data.email,
      id: data.id,
      name: data.name,
      cnh: data.cnh,
      dateOfBirth: data.date_of_birth,
      password: data.password,
      phone: data.phone,
    }) as DriverInterface;
  }
  async getByCpf(cpf: string): Promise<DriverInterface> {
    const data = await database.driver.findFirst({
      where: {
        cpf,
      },
    });

    return PersonFactory.driver({
      cpf: data.cpf,
      email: data.email,
      id: data.id,
      name: data.name,
      cnh: data.cnh,
      dateOfBirth: data.date_of_birth,
      password: data.password,
      phone: data.phone,
    }) as DriverInterface;
  }
  async getByCnh(cnh: string): Promise<DriverInterface> {
    const data = await database.driver.findFirst({
      where: {
        cnh,
      },
    });

    return PersonFactory.driver({
      cpf: data.cpf,
      email: data.email,
      id: data.id,
      name: data.name,
      cnh: data.cnh,
      dateOfBirth: data.date_of_birth,
      password: data.password,
      phone: data.phone,
    }) as DriverInterface;
  }
  async findById(id: string): Promise<DriverInterface> {
    const data = await database.driver.findFirst({
      where: {
        id,
      },
    });

    return PersonFactory.driver({
      cpf: data.cpf,
      email: data.email,
      id: data.id,
      name: data.name,
      cnh: data.cnh,
      dateOfBirth: data.date_of_birth,
      password: data.password,
      phone: data.phone,
    }) as DriverInterface;
  }
  async findAll(): Promise<DriverInterface[]> {
    const data = await database.driver.findMany();
    return data.map(driver => {
      return PersonFactory.driver({
        cpf: driver.cpf,
        email: driver.email,
        id: driver.id,
        name: driver.name,
        cnh: driver.cnh,
        dateOfBirth: driver.date_of_birth,
        password: driver.password,
        phone: driver.phone,
        dateOfCreate: driver.created_at,
        dateOfUpdate: driver.update_at,
      });
    });
  }
  async create(data: DriverInterface): Promise<DriverInterface> {
    await database.driver.create({
      data: {
        cnh: data.cnh,
        cnhDateOfIssue: data.cnhDateOfIssue,
        cnhExpirationDate: data.cnhExpirationDate,
        created_at: new Date(),
        id: data.id,
        cpf: data.cpf,
        date_of_birth: data.dateOfBirth,
        email: data.email,
        name: data.name,
        password: data.password,
        phone: data.phone,
        update_at: new Date(),
      },
    });

    return data;
  }
}
