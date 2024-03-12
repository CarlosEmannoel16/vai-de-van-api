import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';

export interface ICustomerProtocolRepository {
  create(data: CustomerInterface): Promise<CustomerInterface>;
  findByCpf(cpf: string): Promise<CustomerInterface>;
  findByEmail(email: string): Promise<CustomerInterface>;
  findById(email: string): Promise<CustomerInterface>;
  findByPhone(phone: string): Promise<CustomerInterface>;
  checkIfCpfExists(cpf: string): Promise<boolean>;
  checkIfEmailExists(email: string): Promise<boolean>;
  checkIfPhoneExists(phone: string): Promise<boolean>;
}
