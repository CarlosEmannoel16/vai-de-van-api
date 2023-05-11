import { Request } from "express"
declare global {
  namespace Express {
      interface Request{
          user: { 
            name?: string
            id?: string
           }
      }
  }
}