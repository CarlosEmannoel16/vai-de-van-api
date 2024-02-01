import { CustomerInterface } from "@/domain/Person/protocols/CustomerInterface";

export interface IFindCustomerByCpfProtocolRepository {
  findByCpf(cpf: string): Promise<CustomerInterface>;
}
