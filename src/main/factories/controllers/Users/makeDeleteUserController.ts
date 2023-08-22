import { DeleteUserController } from "@/presentation/controller/user/DeleteUserController";
import { IController } from "@/presentation/protocols/IController";
import { makeDeleteUserUseCase } from "../../useCases/makeDeleteUserUseCase";

export const makeDeleteUserController = (): IController=> {
    return new DeleteUserController(makeDeleteUserUseCase())
} 