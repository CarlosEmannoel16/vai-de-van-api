import { BaseError } from "./baseError";
export class NotAuthorizedError extends BaseError{
    constructor(message: string){
        super(message, 402);
        this.name = 'Unauthorized'
    }
}