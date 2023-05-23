import { IJwtCompare } from "@/infra/protocols/auth/JwtCompare";
import jwt from 'jsonwebtoken'
import config from '@config/auth'
export class JwtCompare implements IJwtCompare {
    execute(bearer: string): IJwtCompare.Response {
        let response: IJwtCompare.Response
        const token = bearer.split(' ')[1];
        if (token == null) return { authorized: false, message:'Token Inválido' };
        
        jwt.verify(token, config.jwt.secret, (err, decoded) => {
          if (err) {
            response = { message: 'Token inválido.', authorized: false }
             return
          }
          console.log('decoded', decoded)
          response = { message: 'ok', authorized: true, id: decoded['id']  as string,  name: decoded['name']  as string}
         return 
          
        });
        return response
    }
   

}