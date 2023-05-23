import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import { IGetUserByIdProtocolRepository } from '@/infra/protocols/user';
import { IGetUserById } from '@domain/usecases/user/GetUserByid';
import { formatCpfForReturn } from '../../utils/formatCpfForReturn';

export class GetUserByIdUseCase implements IGetUserById {
  constructor(private readonly getUserById: IGetUserByIdProtocolRepository) {}

  async execute(idUser: string): Promise<IGetUserById.Result> {
    if (!idUser) throw new InvalidGenericError('Id é obrigatório');
    const user = await this.getUserById.getById(idUser);
    if (!user) throw new InvalidGenericError('Usuário nãoo encontrado');
    const { email, id, name, phone, cpf, date_of_birth, password, type, Driver } = user;
    return {
      cpf,
      email,
      id,
      name,
      phone,
      date_of_birth,
      password,
      type,
      Driver
    };
  }
}
