import { IJwtCompare } from "@/dataUseCases/protocols/auth/jwtCompare";
import jwt from 'jsonwebtoken'
export class JwtCompare implements IJwtCompare {
    execute(bearer: string): IJwtCompare.Response {
        let response: IJwtCompare.Response
        const token = bearer.split(' ')[1];
        if (token == null) return { authorized: false, message:'Token Inválido' };
        
        jwt.verify(token, 'segredo', (err, decoded) => {
          if (err) {
            response = { message: 'Token inválido.', authorized: false }
             return
          }
          response = { message: 'ok', authorized: true }
         return 
          
        });
        return response
    }
   

}