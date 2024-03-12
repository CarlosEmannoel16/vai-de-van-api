import { PrismaClient } from '@prisma/client';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { ICustomerProtocolRepository } from './protocols/customer/CustomerProtocolRepository';
export class CustomerPrismaRepository
  extends PrismaClient
  implements ICustomerProtocolRepository
{
  async checkIfCpfExists(cpf: string): Promise<boolean> {
    const customer = await this.customer.findFirst({
      select: {
        id: true,
      },
      where: {
        cpf,
      },
    });

    return customer?.id ? true : false;
  }
  async checkIfEmailExists(email: string): Promise<boolean> {
    const customer = await this.customer.findFirst({
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
    const customer = await this.customer.findFirst({
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
    const customer = await this.customer.findFirst({
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
    const customer = await this.customer.findFirst({
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
    await this.customer.create({
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
    const customer = await this.customer.findFirst({
      where: {
        email,
      },
    });

    if (!customer) throw new Error('Customer not found');

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
    const customer = await this.customer.findFirst({
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
  async update() {}
  async delete() {}
}
