import { ICreateDriver } from '@/domain/usecases/driver/CreateDriver';
import { ICreateDriverProtocolRepository } from '@/infra/protocols/drivers';

export class CreateDriverUseCase implements ICreateDriver {
    constructor(private readonly createDriver: ICreateDriverProtocolRepository){}
 async  create(data: ICreateDriver.resquest): Promise<ICreateDriver.response>{
    return await this.createDriver.createDriver(data)
  }
}
