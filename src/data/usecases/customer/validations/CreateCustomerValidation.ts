import { IActionChainOfResponsibility } from '@/data/protocols/actionsChainOfResponsability/ActionChainOfResponsabilty';
import { IValidatorCreateCustomer } from '@/data/protocols/usecases/customer/actions/ValidatorCreateCustomerProtocol';

export class ValidateCreateCustomer implements IValidatorCreateCustomer {
  constructor(
    private readonly validateEmail: IActionChainOfResponsibility<any>,
    private readonly validateCPF: IActionChainOfResponsibility<any>,
    private readonly validatePhone: IActionChainOfResponsibility<any>,
  ) {}

  async validate(data: IValidatorCreateCustomer.Params): Promise<any> {
    this.validateCPF.setNext(this.validateEmail);
    this.validateEmail.setNext(this.validatePhone);
    await this.validateCPF.validate(data);
  }
}
