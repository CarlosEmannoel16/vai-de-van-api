import { IDeleteUserProtocolRepository, IGetUserByIdProtocolRepository } from '@/infra/protocols';
import { IDeleteUser } from '@/domain/usecases/user/DeleteUser';
import { UserNotFoundError } from '@/data/errors/UserNotFound';
export class DeleteUserById implements IDeleteUser {
  constructor(private readonly deteUserById: IDeleteUserProtocolRepository, private readonly getUserById: IGetUserByIdProtocolRepository) {}
  async execute(id: string): Promise<Boolean> {
    const user = await this.getUserById.getById(id)
    if(!user) throw new UserNotFoundError('Usuário nao encontrado')
    return await this.deteUserById.delete(id);
  }
}
