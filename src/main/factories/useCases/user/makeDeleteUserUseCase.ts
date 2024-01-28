import { DeleteUserById } from "@/data/usecases/user";
import { IDeleteUser } from "@/data/protocols/usecases/user/DeleteUser";
import { UserRepository } from "@/infra/UserRepository";

export const makeDeleteUserUseCase = (): IDeleteUser =>{
    return new DeleteUserById(new UserRepository())
}
