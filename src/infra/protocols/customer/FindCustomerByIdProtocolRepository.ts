import { CustomerInterface } from "@/domain/Person/protocols/CustomerInterface";

export interface IFindCustomerByIdProtocolRepository {
  findById(email: string): Promise<CustomerInterface>;
}
