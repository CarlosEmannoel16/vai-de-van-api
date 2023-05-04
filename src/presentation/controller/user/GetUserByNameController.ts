// import { IController } from '@/presentation/protocols/controller';
// import { IResponse } from '@/presentation/utils/response';
// import { Request, Response } from 'express';
// import { getUserByNameYupValidation } from './validation/yupValidationUser';
// import { GetUserByName } from '@/domain/usecases/user/GetUserByName';

// export class GetUserByNameController implements IController {
//   constructor(private readonly getUserByName: GetUserByName) {}

//   async handle(req: Request, res: Response): Promise<Response<IResponse>> {
//     getUserByNameYupValidation.validate(req.params, {
//       abortEarly: false,
//     });

//     await this.getUserByName.getByName(req.params.nameUser);
//   }
// }
