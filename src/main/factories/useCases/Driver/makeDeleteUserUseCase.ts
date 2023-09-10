import { DeleteUserById } from "@/data/usecases/user";
import { IDeleteUser } from "@/domain/usecases/user/DeleteUser";
import { UserRepository } from "@/infra/UserRepository";

export const makeDeleteUserUseCase = (): IDeleteUser =>{
    return new DeleteUserById(new UserRepository())
}