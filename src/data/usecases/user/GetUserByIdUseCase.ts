import { InvalidGenericError } from '@data/errors/InvalidGenericError';
import { IGetUserByIdProtocolRepository } from '@data/protocols/user';
import { GetUserById } from 'src/domain/usecases/user/GetUserByid';
import { formatCpfForReturn } from '../../utils/formatCpfForReturn';

export class GetUserByIdUseCase implements GetUserById {
  constructor(private readonly getUserById: IGetUserByIdProtocolRepository) {}

  async execute(idUser: string): Promise<GetUserById.Result> {
    if (!idUser) throw new InvalidGenericError('Id é obrigatório');
    const user = await this.getUserById.getById(idUser);
    if (!user) throw new InvalidGenericError('Usuário nçao encontrado');
    const { email, id, name, phone, type, cpf } = user;
    return { cpf: formatCpfForReturn(cpf), email, id, name, phone, type };
  }
}
