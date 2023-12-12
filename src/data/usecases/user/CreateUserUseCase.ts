import { InvalidGenericError } from '@/data/errors/InvalidGenericError';
import { ICreateUser } from '@/data/protocols/usecases/user';
import {

  IUserProtocolRepository,
} from '@/infra/protocols/user';

export class CreateUserUseCase implements ICreateUser {
  constructor(
    private readonly userRepository: IUserProtocolRepository,
  ) {}

  async execute(data: ICreateUser.Params): Promise<ICreateUser.Result> {
    const existsUser = await this.userRepository.getByCpf(data.cpf);
    const existsUserWithEmail =
      await this.userRepository.getUserByEmail(data.email);

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
    const user = await this.userRepository.create({
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
