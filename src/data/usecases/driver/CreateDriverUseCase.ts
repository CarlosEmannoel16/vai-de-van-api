import { ICreateDriver } from '@/domain/usecases/driver/CreateDriver';
import { ICreateDriverProtocolRepository } from '@/infra/protocols/drivers';
import { User } from '@prisma/client';

export class CreateDriverUseCase implements ICreateDriver {
    constructor(private readonly createDriver: ICreateDriverProtocolRepository){}
 async  create(data: ICreateDriver.resquest): Promise<User>{
    return await this.createDriver.createDriver(data)
  }
}
