import { IGetUserByNameProtocolRepository } from '@/dataUseCases/protocols/user/GetUserByNameProtocolRepository';
import { IGetUserByName } from '@/domain/usecases/user/GetUserByName';
import { formatCpfForReturn } from '@/dataUseCases/utils/formatCpfForReturn';
export class GetUserByNameUsecase implements IGetUserByName {
  constructor(
    private readonly getUserByName: IGetUserByNameProtocolRepository,
  ) {}

  async getByName(nameUser: string): Promise<IGetUserByName.Result> {
    const user = await this.getUserByName.getUserByName(nameUser);
    const { email, id, name, phone, type, cpf } = user;
    return { cpf: formatCpfForReturn(cpf), email, id, name, phone, type };
  }
}
