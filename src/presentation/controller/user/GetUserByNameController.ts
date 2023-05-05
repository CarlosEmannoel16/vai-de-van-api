// import { IController } from '@/presentation/protocols/controller';
// import { IResponse } from '@/presentation/utils/response';
// import { Request, Response } from 'express';
// import { getUserByNameYupValidation } from './validation/yupValidationUser';
// import { IGetUserByName } from '@/domain/usecases/user/IGetUserByName';

// export class GetUserByNameController implements IController {
//   constructor(private readonly getUserByName: IGetUserByName) {}

//   async handle(req: Request, res: Response): Promise<Response<IResponse>> {
//     getUserByNameYupValidation.validate(req.params, {
//       abortEarly: false,
//     });

//     await this.getUserByName.getByName(req.params.nameUser);
//   }
// }
