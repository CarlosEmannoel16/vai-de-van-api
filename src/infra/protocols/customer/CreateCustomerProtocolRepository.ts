import { CustomerInterface } from "@/domain/Person/protocols/CustomerInterface";

export interface ICreateCustomerProtocolRepository {
  create(data: CustomerInterface): Promise<CustomerInterface>;
}
