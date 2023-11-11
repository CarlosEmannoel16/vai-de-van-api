import { IUserProtocolRepository } from '@/infra/protocols/user';
import { IGetAllUsers } from '@/domain/usecases/user/GetAllUsers';

export class GetAllUsersUseCase implements IGetAllUsers {
  constructor(private readonly getAllUsers: IUserProtocolRepository) {}
  async execute(): Promise<IGetAllUsers.Result[]> {
    return await this.getAllUsers.getAll();
  }
}
