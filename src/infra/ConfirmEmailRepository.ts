import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { IConfirmEmailRepositoryProtocol } from './protocols/confirmEmail/ConfirmEmailRepository';
import { PrismaClient } from '@prisma/client';

const database = new PrismaClient().codeEmail;
const dateBaseCustomer = new PrismaClient().customer;

export class ConfirmEmailRepository implements IConfirmEmailRepositoryProtocol {
  async confirmEmail(customer: CustomerInterface): Promise<boolean> {
    await dateBaseCustomer.update({
      where: {
        email: customer.email,
        id: customer.id,
      },
      data: {
        emailConfirm: customer.emailConfirm,
      },
    });

    return true;
  }
  async checkCode(customer: CustomerInterface, code: string): Promise<boolean> {
    const codeEmail = await database.findFirst({
      where: {
        code,
        email: customer.email,
      },
    });

    if (!codeEmail) throw new Error('Code not found');

    return true;
  }
  async createPendingCode(
    customer: CustomerInterface,
    code: string,
  ): Promise<boolean> {
    await database.create({
      data: {
        code,
        email: customer.email,
      },
    });

    return true;
  }
}
