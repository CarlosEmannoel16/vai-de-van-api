import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import {
  ICreateUserProtocolRepository,
  IGetUserByCpfProtocolRepository,
} from '@/data/protocols/user';
import UseCase from '@/presentation/utils/decorators';
import { CreateUser } from '@/domain/usecases/user/createUser';

export class CreateUserUseCase implements CreateUser {
  constructor(
    private readonly createUserRepository: ICreateUserProtocolRepository,
    private readonly getUserByNameRepository: IGetUserByCpfProtocolRepository,
  ) {}

  async execute(data: CreateUser.Params): Promise<CreateUser.Result> {
    const existsUser = await this.getUserByNameRepository.getByCpf(data.cpf);
    if (existsUser.name) throw new InvalidGenericError('Cpf já cadastrado');
    const {
      name,
      type,
      cpf,
      phone,
      email = '',
      password,
      date_of_birth,
    } = data;
    const user = await this.createUserRepository.create({
      cpf,
      name,
      password,
      phone,
      type,
      email,
      date_of_birth,
    });
    return user;
  }
}
