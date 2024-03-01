import { BaseError } from './baseError';

export class InvalidParamsError extends BaseError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'Invalid Params Error';
  }
}
