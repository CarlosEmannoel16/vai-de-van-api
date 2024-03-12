import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import { CustomerPrismaRepository } from '@/infra/CustomerRepository';

class CustomerRepositoryAdapter implements CustomerPrismaRepository {
  constructor(private readonly repository: CustomerPrismaRepository) {}

  checkIfCpfExists(cpf: string): Promise<boolean> {
    return this.repository.checkIfCpfExists(cpf);
  }
  checkIfEmailExists(email: string): Promise<boolean> {
    return this.repository.checkIfEmailExists(email);
  }
  checkIfPhoneExists(phone: string): Promise<boolean> {
    return this.repository.checkIfPhoneExists(phone);
  }
  findByPhone(phone: string): Promise<CustomerInterface> {
    throw new Error('Method not implemented.');
  }
  findByCpf(cpf: string): Promise<CustomerInterface> {
    throw new Error('Method not implemented.');
  }
  create(data: CustomerInterface): Promise<CustomerInterface> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<CustomerInterface> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<CustomerInterface> {
    throw new Error('Method not implemented.');
  }
  updateCustomer(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteCustomer(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
