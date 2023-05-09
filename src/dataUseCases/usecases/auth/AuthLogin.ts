import { IAuthLogin } from '@/dataUseCases/protocols/auth/authLogin';
import { IGetUserByEmailProtocolRepository } from '@/dataUseCases/protocols/user';
import { NotAuthorizedError } from '@/dataUseCases/errors/NotAuthorizedError';
import jwt from 'jsonwebtoken';
import config from '@/config/auth';
export class AuthLogin implements IAuthLogin {
  constructor(
    private readonly getUserByEmail: IGetUserByEmailProtocolRepository,
  ) {}
  async verify(data: IAuthLogin.request): Promise<IAuthLogin.response> {
    const user = await this.getUserByEmail.getUserByEmail(data.email);
    if (!user) throw new NotAuthorizedError('Usuário ou senha inválidos');

    if (user.password === data.password) {
      const token = jwt.sign({ name: user.name }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
      });
      return { authorized: true, type: user.type, user, token };
    }
  }
}
