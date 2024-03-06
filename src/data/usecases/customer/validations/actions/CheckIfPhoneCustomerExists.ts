import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import Messages from '@/@shared/language';
import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { IValidatorCreateCustomer } from '@/data/protocols/usecases/customer/actions/ValidatorCreateCustomerProtocol';
import { IActionChainOfResponsibility } from '@/data/protocols/actionsChainOfResponsability/ActionChainOfResponsabilty';

export class CheckIfPhoneCustomerExists
  implements IActionChainOfResponsibility<any>
{
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  private next: IActionChainOfResponsibility<any>;

  async validate(
    data: IValidatorCreateCustomer.Params,
  ): Promise<CustomerInterface> {
    if (!data.phone) throw new InvalidParamsError('Phone is require');
    const user = await this.customerRepository.checkIfPhoneExists(data.phone);

    if (user) throw new Error(Messages.customer.phoneAlreadyExists);

    if (this.next) return this.next.validate(data);
  }
  setNext(next: IActionChainOfResponsibility<any>) {
    this.next = next;
    return next;
  }
}
