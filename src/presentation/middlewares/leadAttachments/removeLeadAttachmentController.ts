import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus } from '@/utils/service'
import { Request, Response } from 'express'
import { RemoveLeadAttachment } from '@/domain/usecases/leadAttachment/removeLeadAttachment'

export class RemoveLeadAttachmentController implements Controller {
  constructor(
    private readonly removeLeadAttachmentUseCase: RemoveLeadAttachment
  ) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { leadId, attachmentId } = req.params

      await this.removeLeadAttachmentUseCase.execute({
        leadId: parseInt(leadId, 10),
        attachmentId: parseInt(attachmentId, 10),
      })

      return res.json({
        status: ResponseStatus.OK,
      })
    } catch (error) {
      const {
        statusCode,
        status,
        message,
      } = ControllersExceptionHandler.handleError(error as Error)

      return res.status(statusCode).json({
        status,
        message,
      })
    }
  }
}
