import { IGetUserByNameProtocolRepository } from '@/infra/protocols/user/GetUserByNameProtocolRepository';
import { IGetUserByName } from '@/data/protocols/usecases/user/GetUserByName';
import { formatCpfForReturn } from '@/data/utils/formatCpfForReturn';
export class GetUserByNameUsecase implements IGetUserByName {
  constructor(
    private readonly getUserByName: IGetUserByNameProtocolRepository,
  ) {}

  async getByName(nameUser: string): Promise<IGetUserByName.Result> {
    const user = await this.getUserByName.getUserByName(nameUser);
    const { email, id, name, phone, cpf } = user;
    return { cpf: formatCpfForReturn(cpf), email, id, name, phone, };
  }
}
