import { ICreateUser } from '@/data/protocols/usecases/user';
import PersonFactory from '@/domain/Person/factory/PersonFactory';
import { IUserProtocolRepository } from '@/infra/protocols/user';

export class CreateUserUseCase implements ICreateUser {
  constructor(private readonly userRepository: IUserProtocolRepository) {}

  async execute(data: ICreateUser.Params): Promise<ICreateUser.Result> {
    const validateCpf = new Promise(async (resolve, reject) => {
      const existsUser = await this.userRepository.getByCpf(data.cpf);
      if (existsUser?.name) {
        reject(new Error('CPF já cadastrado'));
      }
      resolve(1);
    });

    const validateEmail = new Promise(async (resolve, reject) => {
      const existsUserWithEmail = await this.userRepository.getUserByEmail(
        data.email,
      );

      if (existsUserWithEmail?.email) {
        reject(new Error('Email já cadastrado'));
      }
      resolve(1);
    });

    await Promise.all([validateCpf, validateEmail]);

    console.log('data', data);

    const user = PersonFactory.user({
      cpf: data.cpf,
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      emailConfirm: false,
    });

    await this.userRepository.create(user);
    return user;
  }
}
