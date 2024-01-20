import { Customer } from '@/domain/Customer/entity/Customer';
import { CustomerFactory } from '@/domain/Customer/factories/CustomerFactory';
import { User } from '@/domain/User/entity/User';
import { PrismaClient } from '@prisma/client';

export class CustomerRepository {
  async createCustomer(data: Customer): Promise<Customer> {
    const database = new PrismaClient();
    await database.customer.create({
      data: {
        id: data.id,
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        phone: data.phone,
        password: data.password,
        phone2: data.phone2,
        update_at: new Date(),
        created_at: new Date(),
      },
    });
    return data;
  }
  async findCustomerByEmail(email: string):Promise<Customer> {
    const database = new PrismaClient();
    const customer = await database.customer.findFirst({
      where: {
        email,
      },
    });

    return CustomerFactory.create({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      password: customer.password,
    });
  }
  async findCustomerById(id: string): Promise<Customer> {
    const database = new PrismaClient();
    const customer = await database.customer.findFirst({
      where: {
        id,
      },
    });
    return CustomerFactory.create({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      password: customer.password,
    });
  }
  async updateCustomer() {}
  async deleteCustomer() {}
}
