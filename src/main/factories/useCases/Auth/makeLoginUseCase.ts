import {AuthLogin} from '@/data/usecases/auth/AuthLogin'
import { UserRepository } from "@/infra/UserRepository";

export const makeLoginUseCase = ()=>{
    return new AuthLogin(new UserRepository())
}