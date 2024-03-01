import { IValidatorCustomerProtocol } from "@/data/usecases/customer/validations/CreateCustomerValidation";

export interface IValidatorCreateCustomer {
  validate(data: IValidatorCustomerProtocol.Params): Promise<any>;
}
