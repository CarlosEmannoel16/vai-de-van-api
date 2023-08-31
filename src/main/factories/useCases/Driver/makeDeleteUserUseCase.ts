import { DeleteUserById } from "@/data/usecases/user";
import { IDeleteUser } from "@/domain/usecases/user/DeleteUser";
import { makeUserRepository } from "../../repositories/makeUserRepositories";

export const makeDeleteUserUseCase = (): IDeleteUser =>{
    return new DeleteUserById(makeUserRepository(), makeUserRepository())
}