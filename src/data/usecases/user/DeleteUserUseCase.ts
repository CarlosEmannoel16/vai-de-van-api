
import { IDeleteUser } from '@/data/protocols/usecases/user/DeleteUser';
import { UserNotFoundError } from '@/data/errors/UserNotFound';
import { IUserProtocolRepository } from '@/infra/protocols';
export class DeleteUserById implements IDeleteUser {
  constructor(
    private readonly userRepository: IUserProtocolRepository,
  ) {}
  async execute(id: string): Promise<Boolean> {
    const user = await this.userRepository.getById(id);
    if (!user) throw new UserNotFoundError('Usuário nao encontrado');
    return await this.userRepository.delete(id);
  }
}
