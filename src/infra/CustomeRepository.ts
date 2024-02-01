import { PrismaClient } from '@prisma/client';
import { IFindCustomerByCpfProtocolRepository } from './protocols/customer/FindCustomerByCpfProtocolRepository';
import { ICreateCustomerProtocolRepository } from './protocols/customer/CreateCustomerProtocolRepository';
import { IFindCustomerByEmailProtocolRepository } from './protocols/customer/FindCustomerByEmailProtocolRepository';
import { IFindCustomerByIdProtocolRepository } from './protocols/customer/FindCustomerByIdProtocolRepository';
import { PersonFactory } from '@/domain/Person/factory/PersonFactory';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
const database = new PrismaClient().customer;
export class CustomerRepository
  implements
    IFindCustomerByCpfProtocolRepository,
    ICreateCustomerProtocolRepository,
    IFindCustomerByEmailProtocolRepository,
    IFindCustomerByIdProtocolRepository
{
  async findByCpf(cpf: string): Promise<CustomerInterface> {
    const customer = await database.findFirst({
      where: {
        cpf,
      },
    });

    return PersonFactory.create('customer', {
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

    return PersonFactory.create('customer', {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      password: customer.password,

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
    return PersonFactory.create('customer', {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf,
      password: customer.password,
      phone: customer.phone,
    }) as CustomerInterface;
  }
  async updateCustomer() {}
  async deleteCustomer() {}
}
