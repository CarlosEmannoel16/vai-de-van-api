import { ICustomerProtocolRepository } from '@/infra/protocols/customer/CustomerProtocolRepository';
import { CustomerInterface } from '@/domain/Person/protocols/CustomerInterface';
import Messages from '@/@shared/language';
import { InvalidParamsError } from '@/data/errors/ParamsInvalid';
import { IActionChainOfResponsibility } from '@/data/protocols/actionsChainOfResponsability/ActionChainOfResponsabilty';

export class CheckIfCPFCustomerExists
  implements IActionChainOfResponsibility<any>
{
  constructor(
    private readonly customerRepository: ICustomerProtocolRepository,
  ) {}

  private next: IActionChainOfResponsibility<any>;

  async validate(data): Promise<CustomerInterface> {
    if (!data.cpf) throw new InvalidParamsError('CPF is require');
    const user = await this.customerRepository.checkIfCpfExists(data.cpf);
    if (user) throw new Error(Messages?.customer?.cpfAlreadyExists);

    if (this.next) return this.next.validate(data);
  }
  setNext(next: IActionChainOfResponsibility<any>) {
    this.next = next;
    return next;
  }
}
