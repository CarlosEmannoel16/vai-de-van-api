import { CustomerInterface } from "@/domain/Person/protocols/CustomerInterface";

export interface IFindCustomerByEmailProtocolRepository {
  findByEmail(email: string): Promise<CustomerInterface>;
}
