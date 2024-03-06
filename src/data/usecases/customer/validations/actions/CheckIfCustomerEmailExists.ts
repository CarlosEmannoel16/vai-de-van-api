import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';
import { ValidateCreateCustomer } from '../CreateCustomerValidation';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import Messages from '@/@shared/language';
import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { IActionChainOfResponsibility } from '@/data/protocols/actionsChainOfResponsability/ActionChainOfResponsabilty';

export class CheckIfEmailCustomerExists
  implements IActionChainOfResponsibility<any>
{
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  private next: IActionChainOfResponsibility<any>;

  async validate(data): Promise<CustomerInterface> {
    if (!data.email) throw new InvalidParamsError('Email is require');
    const user = await this.customerRepository.checkIfEmailExists(data.email);
    if (user) throw new Error(Messages.customer.emailAlreadyExists);

    if (this.next) return this.next.validate(data);
  }
  setNext(next: IActionChainOfResponsibility<any>) {
    this.next = next;
    return next;
  }
}
