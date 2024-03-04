import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import { IUpdateUser } from '@/data/protocols/usecases/user/UpdateUser';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { IUserProtocolRepository } from '@/infra/protocols';

import { IUpdateUserProtocolRepository } from '@/infra/protocols/user/UpdateUserProtocolRepository';

export class UpdateUserUseCase implements IUpdateUser {
  constructor(private readonly userRepository: IUserProtocolRepository) {}

  async execute(data: IUpdateUser.Params): Promise<IUpdateUser.Result> {
    const userExist = await this.userRepository.getById(data.id);

    if (!userExist.id) throw new InvalidGenericError('Usuário não encontrado');

    const user = PersonFactory.user({
      cpf: data.cpf,
      email: data.email,
      name: data.name,
    });

    await this.userRepository.update(user);

    return user;
  }
}
