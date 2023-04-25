import { InvalidGenericError } from '@data/errors/InvalidGenericError';
import {
  ICreateUserProtocolRepository,
  IGetUserByCpfProtocolRepository,
} from '@data/protocols/user';
import UseCase from '@presentation/utils/decorators';
import { CreateUser } from 'src/domain/usecases/user/createUser';
@UseCase
export class CreateUserUseCase implements CreateUser {
  constructor(
    private readonly createUserRepository: ICreateUserProtocolRepository,
    private readonly getUserByNameRepository: IGetUserByCpfProtocolRepository,
  ) {}

  async execute(data: CreateUser.Params): Promise<CreateUser.Result> {
    const existsUser = await this.getUserByNameRepository.getByCpf(data.cpf);
    if (existsUser.name) throw new InvalidGenericError('Cpf já cadastrado');
    const { name, type, cpf, phone, email = '', password } = data;
    const user = await this.createUserRepository.create({
      cpf,
      name,
      password,
      phone,
      type,
      email,
    });
    return user;
  }
}
