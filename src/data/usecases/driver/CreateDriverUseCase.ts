import { ICreateDriver } from '@/domain/usecases/driver/CreateDriver';
import { IUserProtocolRepository } from '@/infra/protocols';
import { ICreateDriverProtocolRepository } from '@/infra/protocols/drivers';
import { IGetUserByParamsProtocolRepository } from '@/infra/protocols/user/GetUserByParamsProtocolRepository';
import { User } from '@prisma/client';

export class CreateDriverUseCase implements ICreateDriver {
  constructor(
    private readonly userRepository: IUserProtocolRepository,
    private readonly driverRepository: ICreateDriverProtocolRepository,
  ) {}
  async create(data: ICreateDriver.request): Promise<User> {
    const existsCpf = await this.userRepository.getUserByParams({ cpf: data.cpf })
    if(existsCpf) throw new Error('CPF já cadastrado')

    const existsEmail = await this.userRepository.getUserByParams({ email: data.email })
    if(existsEmail) throw new Error('Email já cadastrado')
   

    return this.driverRepository.createDriver({
      ...data,
      cnhDateOfIssue: new Date(data.cnhDateOfIssue),
      cnhExpirationDate: new Date(data.cnhExpirationDate),
      date_of_birth: new Date(data.date_of_birth),
    });
  }
}
