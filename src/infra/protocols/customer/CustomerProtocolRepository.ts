import { CustomerInterface } from "@/domain/Person/protocols/CustomerInterface";

export interface ICustomerProtocolRepository {
  create(data: CustomerInterface): Promise<CustomerInterface>;
  findByCpf(cpf: string): Promise<CustomerInterface>;
  findByEmail(email: string): Promise<CustomerInterface>;
  findById(email: string): Promise<CustomerInterface>;
}
