import { User } from "@/domain/User/entity/User";
import { Customer } from "../entity/Customer";

interface params {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export class CustomerFactory {
  static create(data: params): Customer {
    const user = new Customer(data.id, data.name, data.email, data.cpf);
    user.addPassword(data.password);
    return user;
  }
}
