import { Customer } from '@/domain/Customer/entity/Customer';
import { PrismaClient } from '@prisma/client';

export class CustomerRepository {
  async createCustomer(data: Customer):Promise<Customer> {
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
  async findCustomerByEmail() {}
  async findCustomerById() {}
  async updateCustomer() {}
  async deleteCustomer() {}
}
