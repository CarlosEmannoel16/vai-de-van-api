import { AdmMiddleware } from "@/presentation/middlewares/auth/admMiddleware";
import { IMiddleware } from "@/presentation/protocols/IMiddleware";
import { makeUserRepository } from "../repositories";


export const makeMiddlewareRouteAdm = (): IMiddleware => new AdmMiddleware(makeUserRepository())