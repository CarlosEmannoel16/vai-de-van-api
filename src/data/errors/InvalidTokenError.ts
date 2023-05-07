import { BaseError } from './baseError';

export class InvalidTokenError extends BaseError {
  constructor(message: string) {
    super(message, 401);
    this.name = 'Unauthorized';
  }
}
