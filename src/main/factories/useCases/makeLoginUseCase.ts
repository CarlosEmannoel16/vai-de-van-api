import { IAuthLogin } from "@/dataUseCases/protocols/auth/authLogin";
import {AuthLogin} from '@/dataUseCases/usecases/auth/AuthLogin'
import {UserRepository} from '@/infra/db/postgres/repository/UserRepository'

export const makeLoginUseCase = (): IAuthLogin=>{
    return new AuthLogin(new UserRepository())
}