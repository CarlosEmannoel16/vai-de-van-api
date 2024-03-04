import { IActionChainOfResponsibility } from '@/data/protocols/actionsChainOfResponsability/ActionChainOfResponsabilty';
import { IDriverProtocolRepository } from '@/infra/protocols/drivers';

export class CheckIfEmailDriverExists
  implements IActionChainOfResponsibility<any>
{
  private next: IActionChainOfResponsibility<any>;

  constructor(private readonly driverRepository: IDriverProtocolRepository) {}
  async validate(data: any): Promise<any> {
    const existsEmail = await this.driverRepository.checkExistsByEmail(
      data.email,
    );
    if (existsEmail) throw new Error('Email já cadastrado');
    if (this.next) await this.next.validate(data);
  }
  setNext(next: IActionChainOfResponsibility<any>) {
    this.next = next;
  }
}
