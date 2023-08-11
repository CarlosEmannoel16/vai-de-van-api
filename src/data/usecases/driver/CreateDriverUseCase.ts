import { ICreateDriver } from '@/domain/usecases/driver/CreateDriver';
import { ICreateDriverProtocolRepository } from '@/infra/protocols/drivers';
import { IGetUserByParamsProtocolRepository } from '@/infra/protocols/user/GetUserByParamsProtocolRepository';
import { User } from '@prisma/client';

export class CreateDriverUseCase implements ICreateDriver {
  constructor(
    private readonly createDriver: ICreateDriverProtocolRepository,
    private readonly getUser: IGetUserByParamsProtocolRepository,
  ) {}
  async create(data: ICreateDriver.resquest): Promise<User> {
    console.log(data)
    const existsCpf = await this.getUser.getUserByParams({ cpf: data.cpf })
    const existsEmail = await this.getUser.getUserByParams({ email: data.email })


    if(existsCpf) throw new Error('CPF já cadastrado')
    if(existsEmail) throw new Error('Email já cadastrado')
   

    return this.createDriver.createDriver({
      ...data,
      cnhDateOfIssue: new Date(data.cnhDateOfIssue),
      cnhExpirationDate: new Date(data.cnhExpirationDate),
      date_of_birth: new Date(data.date_of_birth),
    });
  }
}
