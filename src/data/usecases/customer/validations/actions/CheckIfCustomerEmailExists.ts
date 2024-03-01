import { ICustomerProtocolRepository } from "@/infra/protocols/customer/CustomerProtocolRepository";
import { IValidatorCustomerProtocol } from "../CreateCustomerValidation";
import { CustomerInterface } from "@/domain/Person/protocols/CustomerInterface";
import  Messages  from "@/@shared/language";
import { InvalidParamsError } from "@/data/errors/ParamsInvalid";

export class CheckIfEmailCustomerExists implements IValidatorCustomerProtocol {
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  private next: IValidatorCustomerProtocol;

  async validate(
    data: IValidatorCustomerProtocol.Params,
  ): Promise<CustomerInterface> {
    if (!data.email) throw new InvalidParamsError('Email is require');
    const user = await this.customerRepository.checkIfEmailExists(data.email);
    if (user) throw new Error(Messages.customer.emailAlreadyExists);

    if (this.next) return this.next.validate(data);
  }
  setNext(next: IValidatorCustomerProtocol): IValidatorCustomerProtocol {
    this.next = next;
    return next;
  }
}
