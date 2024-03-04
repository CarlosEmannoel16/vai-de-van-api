import { IUserProtocolRepository } from '@/infra/protocols/user';
import { IGetAllUsers } from '@/data/protocols/usecases/user/GetAllUsers';

export class GetAllUsersUseCase implements IGetAllUsers {
  constructor(private readonly getAllUsers: IUserProtocolRepository) {}
  async execute(): Promise<IGetAllUsers.Result[]> {
    const users = await this.getAllUsers.getAll();
    return users.map((user) => ({
      cpf: user.cpf,
      date_of_birth: user.dateOfBirth,
      email: user.email,
      id: user.id,
      name: user.name,
      phone: user.phone,
      update_at: user.dateOfUpdate,
      created_at: user.dateOfCreate,
    }));
  }
}
