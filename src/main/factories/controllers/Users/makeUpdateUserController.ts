import { UpdateUserController } from "@/presentation/controller/user/UpdateUserController"
import { makeUpdateUserUseCase } from "../../useCases/user/makeUpdateUserUseCase"

export const makeUpdateUserController = () => {
    return new UpdateUserController(makeUpdateUserUseCase())
}
