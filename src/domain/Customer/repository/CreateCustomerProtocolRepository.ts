import { Customer } from "../entity/Customer";

export interface CreateCustomerProtocolRepository {
  create(data: Customer): Promise<Customer>;
}
