import { IAuthLogin } from "@/infra/protocols/auth/authLogin";
import {AuthLogin} from '@/data/usecases/auth/AuthLogin'
import {makeUserRepository} from '../repositories/makeUserRepositories'

export const makeLoginUseCase = (): IAuthLogin=>{
    return new AuthLogin(makeUserRepository())
}