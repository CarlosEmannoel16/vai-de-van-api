import { IUpdateUser } from "@/domain/usecases/user/updateUser";
import ControllerException from "@/presentation/helpers/ControllerException";
import { IController } from "@/presentation/protocols/IController";
import { IResponse, ResponseStatus } from "@/presentation/utils/response";
import { Request, Response } from "express";
import { updateUserYupValidation } from "./validation/yupValidationUser";

export class UpdateUserController implements IController {
    private readonly updateUserUseCase: IUpdateUser;

    constructor(UpdateUserUseCase: IUpdateUser) {
        this.updateUserUseCase = UpdateUserUseCase
    }

    async handle(req: Request, res: Response): Promise<Response<IResponse>> {
        try {
            await updateUserYupValidation.validate(req.body, {
                abortEarly: false,
            })

            const user = await this.updateUserUseCase.execute(req.body)

            return res.status(200).json({
                status: ResponseStatus.UPDATE,
                data: user
            })
        } catch (error) {
            const { message, status, statusCode } = ControllerException.handleError(
                error as Error,
            );
            return res.status(statusCode).json({ message, status });
        }
    };
}