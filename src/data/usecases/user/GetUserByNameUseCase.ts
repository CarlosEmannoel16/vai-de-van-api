import { IGetUserByNameProtocolRepository } from '@data/protocols/user/GetUserByNameProtocolRepository';
import { GetUserByName } from 'src/domain/usecases/user/GetUserByName';
import { formatCpfForReturn } from '@data/utils/formatCpfForReturn';
export class GetUserByNameUsecase implements GetUserByName {
  constructor(
    private readonly getUserByName: IGetUserByNameProtocolRepository,
  ) {}

  async getByName(nameUser: string): Promise<GetUserByName.Result> {
    const user = await this.getUserByName.getUserByName(nameUser);
    const { email, id, name, phone, type, cpf } = user;
    return { cpf: formatCpfForReturn(cpf), email, id, name, phone, type };
  }
}
