import { InvalidTokenError } from "@/data/errors/InvalidTokenError"
import { IJwtCompare } from "@/data/protocols/auth/jwtCompare"
import  Jwt  from "jsonwebtoken"

export class JwtCompare  implements IJwtCompare{

    execute(token: string){
        let response: IJwtCompare.Response 

        if(!token) throw new InvalidTokenError('Token Ausente')
            Jwt.verify(token, '12345', (error, encoded) => {
            if(error) {
                response =  {message: 'Token Inválido', authorized: false} 
                return
            }
            response =  { message: 'authorized', authorized: true } 
            return
        })
        return response
    }
}