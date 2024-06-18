import { IAuthLogin } from '@/infra/protocols/auth/AuthLogin';
import { IUserProtocolRepository } from '@/infra/protocols/user';
import { NotAuthorizedError } from '@/data/errors/NotAuthorizedError';
import jwt from 'jsonwebtoken';
import config from '@/config/auth';
export class AuthLogin implements IAuthLogin {
  constructor(private readonly getUserByEmail: IUserProtocolRepository) {}
  async verify(data: IAuthLogin.request): Promise<IAuthLogin.response> {
    console.log(data);
    const user = await this.getUserByEmail.getUserByEmail(data.email);
    if (!Object.keys(user).length)
      throw new NotAuthorizedError('Usuário ou senha inválidos');

    if (user.password === data.password) {
      const token = jwt.sign(
        { name: user.name, id: user.id },
        config.jwt.secret,
        {
          expiresIn: config.jwt.expiresIn,
        },
      );
      return { authorized: true, token, message: 'Ok!' };
    }
    return { authorized: false, message: 'Usuário ou senha Inválidos' };
  }
}
