import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';

export interface IConfirmEmailRepositoryProtocol {
  confirmEmail(customer: CustomerInterface): Promise<boolean>;
  checkCode(customer: CustomerInterface, code: string): Promise<boolean>;
  createPendingCode(
    customer: CustomerInterface,
    code: string,
  ): Promise<boolean>;
}
