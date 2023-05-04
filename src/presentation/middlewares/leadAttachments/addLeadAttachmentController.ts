// import ControllersExceptionHandler from '';
// import { AddLeadAttachments } from '@/domain/usecases/leadAttachment/addLeadAttachments';
// import { Controller } from '@/presentation/protocols/controller';
// import { IResponse, ResponseStatus } from '@/utils/service';
// import { Request, Response } from 'express';
// import { multerUploadMiddleware } from '../../middlewares/multerUploadMiddleware';

// const multerHandler = multerUploadMiddleware.array('attachments');

// export class AddLeadAttachmentController implements Controller {
//   constructor(private readonly addLeadAttachmentUseCase: AddLeadAttachments) {}

//   async handle(
//     req: Request,
//     res: Response<IResponse>,
//   ): Promise<Response<IResponse>> {
//     try {
//       await this.checkFilesOnRequest(req, res);
//       const attachments = req.files;

//       if (!attachments || !attachments.length) {
//         throw new Error('Nenhum anexo enviado');
//       }

//       const filenames = attachments.map(({ filename, originalname }) => {
//         return { filename, originalname };
//       });

//       const leadComment = await this.addLeadAttachmentUseCase.execute({
//         leadId: +req.params.leadId,
//         attachment: filenames,
//       });

//       return res.status(201).json({
//         status: ResponseStatus.CREATED,
//         data: leadComment,
//       });
//     } catch (error) {
//       const { statusCode, status, message } =
//         ControllersExceptionHandler.handleError(error as Error);

//       return res.status(statusCode).json({
//         status,
//         message,
//       });
//     }
//   }

//   checkFilesOnRequest(req: Request, res: Response) {
//     return new Promise((resolve, reject) => {
//       multerHandler(req, res, (error: any) => {
//         if (error) {
//           const errorMapper = {
//             'File too large': 'Arquivo(s) muito grande(s) (Máximo 5MB)',
//             'Too many parts': 'Muitos arquivos enviados (Máximo 10)',
//           };
//           reject(new Error(errorMapper[error.message] || error.message));
//         } else {
//           resolve();
//         }
//       });
//     });
//   }
// }
