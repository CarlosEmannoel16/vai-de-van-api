import { UpdateUserController } from "@/presentation/controller/user/UpdateUserController"
import { makeUpdateUserUseCase } from "../../useCases/Driver/makeUpdateUserUseCase"

export const makeUpdateUserController = () => {
    return new UpdateUserController(makeUpdateUserUseCase())
}