import { IAuthLogin } from '@/dataUseCases/protocols/auth/authLogin';
import ControllerException from '@/presentation/helpers/ControllerException';
import { IController } from '@/presentation/protocols/IController';
import { IResponse } from '@/presentation/utils/response';
import { Request, Response } from 'express';

export class LoginController implements IController {
  constructor(private readonly verifyLogin: IAuthLogin) {}
  async handle(req: Request, res: Response): Promise<Response<IResponse>> {
    try {
        const result = await this.verifyLogin.verify({
            email: req.body.email,
            password: req.body.password,
          });
         
          return res.status(200).json(result)
    } catch (error) {
        const {message,status,statusCode} = ControllerException.handleError(error)
        return res.status(statusCode).json({message, status})
    }
  }
}
