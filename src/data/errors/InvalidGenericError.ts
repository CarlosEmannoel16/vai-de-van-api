import { BaseError } from './baseError';

export class InvalidGenericError extends BaseError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'Invalid Resource';
  }
}
