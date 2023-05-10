import { UserRepository } from "@infra/UserRepository"

export const makeUserRepository = (): UserRepository =>{
    return new UserRepository()
}