import { PrismaClient } from '@prisma/client';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { ICustomerProtocolRepository } from './protocols/customer/CustomerProtocolRepository';
const database = new PrismaClient().customer;
export class CustomerRepository implements ICustomerProtocolRepository {
  async checkIfCpfExists(cpf: string): Promise<boolean> {
    const customer = await database.findFirst({
      select: {
        id: true,
      },
      where: {
        cpf,
      },
    });

    return !!customer;
  }
  async checkIfEmailExists(email: string): Promise<boolean> {
    const customer = await database.findFirst({
      select: {
        id: true,
      },
      where: {
        email,
      },
    });

    return !!customer;
  }
  async checkIfPhoneExists(phone: string): Promise<boolean> {
    const customer = await database.findFirst({
      select: {
        id: true,
      },
      where: {
        phone,
      },
    });

    return !!customer;
  }
  async findByPhone(phone: string): Promise<CustomerInterface> {
    const customer = await database.findFirst({
      where: {
        phone,
      },
    });

    if (!customer) throw new Error('Customer not found');

    return PersonFactory.customer({
      cpf: customer.cpf,
      email: customer.email,
      id: customer.id,
      name: customer.name,
      password: customer.password,
      phone: customer.phone,
    }) as CustomerInterface;
  }
  async findByCpf(cpf: string): Promise<CustomerInterface> {
    const customer = await database.findFirst({
      where: {
        cpf,
      },
    });

    return PersonFactory.customer({
      cpf: customer.cpf,
      email: customer.email,
      id: customer.id,
      name: customer.name,
      password: customer.password,
      phone: customer.phone,
    }) as CustomerInterface;
  }
  async create(data: CustomerInterface): Promise<CustomerInterface> {
    await database.create({
      data: {
        id: data.id,
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        phone: data.phone,
        password: data.password,
        phone2: data.secondaryPhone,
        update_at: new Date(),
        created_at: new Date(),
        date_of_birth: data.dateOfBirth,
      },
    });
    return data;
  }
  async findByEmail(email: string): Promise<CustomerInterface> {
    const customer = await database.findFirst({
      where: {
        email,
      },
    });

    return PersonFactory.customer({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      password: customer.password,
      dateOfBirth: customer.date_of_birth,
      phone: customer.phone,
    }) as CustomerInterface;
  }
  async findById(id: string): Promise<CustomerInterface> {
    const database = new PrismaClient();
    const customer = await database.customer.findFirst({
      where: {
        id,
      },
    });
    return PersonFactory.customer({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      password: customer.password,
      phone: customer.phone,
      emailConfirm: customer.emailConfirm,
    }) as CustomerInterface;
  }
  async updateCustomer() {}
  async deleteCustomer() {}
}
