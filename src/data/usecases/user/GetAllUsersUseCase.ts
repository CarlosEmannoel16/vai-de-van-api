import { IGetAllUsersProtocolRepository } from '@/data/protocols/user';
import { IGetAllUsers } from '@/domain/usecases/user/GetAllUsers';

export class GetAllUsersUseCase implements IGetAllUsers {
  constructor(private readonly getAllUsers: IGetAllUsersProtocolRepository) {}
  execute(): Promise<IGetAllUsers.Result[]> {
    return this.getAllUsers.getAll();
  }
}
