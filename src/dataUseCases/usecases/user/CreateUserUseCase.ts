import { InvalidGenericError } from '@/dataUseCases/errors/InvalidGenericError';
import {
  ICreateUserProtocolRepository,
  IGetUserByCpfProtocolRepository,
  IGetUserByEmailProtocolRepository,
} from '@/dataUseCases/protocols/user';
import { ICreateUser } from '@domain/usecases/user/createUser';

export class CreateUserUseCase implements ICreateUser {
  constructor(
    private readonly createUserRepository: ICreateUserProtocolRepository,
    private readonly getUserByCPFRepository: IGetUserByCpfProtocolRepository,
    private readonly getUserByEmailRepository: IGetUserByEmailProtocolRepository,
  ) {}

  async execute(data: ICreateUser.Params): Promise<ICreateUser.Result> {
    const existsUser = await this.getUserByCPFRepository.getByCpf(data.cpf);
    const existsUserWithEmail =
      await this.getUserByEmailRepository.getUserByEmail(data.email);

    if (existsUserWithEmail.email)
      throw new InvalidGenericError('E-mail Já cadastrado');
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
      date_of_birth: new Date(date_of_birth),
    });
    return user;
  }
}
